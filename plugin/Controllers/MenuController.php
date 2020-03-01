<?php

namespace GeminiLabs\SiteReviews\Controllers;

use GeminiLabs\SiteReviews\Application;
use GeminiLabs\SiteReviews\Helper;
use GeminiLabs\SiteReviews\Helpers\Arr;
use GeminiLabs\SiteReviews\Helpers\Str;
use GeminiLabs\SiteReviews\Modules\Console;
use GeminiLabs\SiteReviews\Modules\Html\Builder;
use GeminiLabs\SiteReviews\Modules\Html\Settings;
use GeminiLabs\SiteReviews\Modules\Html\Template;
use GeminiLabs\SiteReviews\Modules\Notice;
use GeminiLabs\SiteReviews\Modules\System;

class MenuController extends Controller
{
    /**
     * @return void
     * @action admin_menu
     */
    public function registerMenuCount()
    {
        global $menu, $typenow;
        foreach ($menu as $key => $value) {
            if (!isset($value[2]) || $value[2] != 'edit.php?post_type='.Application::POST_TYPE) {
                continue;
            }
            $postCount = wp_count_posts(Application::POST_TYPE);
            $pendingCount = glsr(Builder::class)->span(number_format_i18n($postCount->pending), [
                'class' => 'unapproved-count',
            ]);
            $awaitingModeration = glsr(Builder::class)->span($pendingCount, [
                'class' => 'awaiting-mod count-'.$postCount->pending,
            ]);
            $menu[$key][0].= ' '.$awaitingModeration;
            if (Application::POST_TYPE === $typenow) {
                $menu[$key][4].= ' current';
            }
            break;
        }
    }

    /**
     * @return void
     * @action admin_menu
     */
    public function registerSubMenus()
    {
        $pages = $this->parseWithFilter('submenu/pages', [
            'settings' => _x('Settings', 'admin-text', 'site-reviews'),
            'tools' => _x('Tools', 'admin-text', 'site-reviews'),
            'addons' => _x('Add-ons', 'admin-text', 'site-reviews'),
            'documentation' => _x('Help', 'admin-text', 'site-reviews'),
        ]);
        foreach ($pages as $slug => $title) {
            $method = Helper::buildMethodName('render-'.$slug.'-menu');
            $callback = apply_filters('site-reviews/addon/submenu/callback', [$this, $method], $slug);
            if (!is_callable($callback)) {
                continue;
            }
            add_submenu_page('edit.php?post_type='.Application::POST_TYPE, $title, $title, glsr()->getPermission($slug), $slug, $callback);
        }
    }

    /**
     * @return void
     * @see $this->registerSubMenus()
     * @callback add_submenu_page
     */
    public function renderAddonsMenu()
    {
        $this->renderPage('addons', [
            'template' => glsr(Template::class),
        ]);
    }

    /**
     * @return void
     * @see $this->registerSubMenus()
     * @callback add_submenu_page
     */
    public function renderDocumentationMenu()
    {
        $tabs = $this->parseWithFilter('documentation/tabs', [
            'support' => _x('Support', 'admin-text', 'site-reviews'),
            'faq' => _x('FAQ', 'admin-text', 'site-reviews'),
            'shortcodes' => _x('Shortcodes', 'admin-text', 'site-reviews'),
            'hooks' => _x('Hooks', 'admin-text', 'site-reviews'),
            'functions' => _x('Functions', 'admin-text', 'site-reviews'),
            'addons' => _x('Addons', 'admin-text', 'site-reviews'),
        ]);
        $addons = apply_filters('site-reviews/addon/documentation', []);
        ksort($addons);
        if (empty($addons)) {
            unset($tabs['addons']);
        }
        $this->renderPage('documentation', [
            'addons' => $addons,
            'tabs' => $tabs,
        ]);
    }

    /**
     * @return void
     * @see $this->registerSubMenus()
     * @callback add_submenu_page
     */
    public function renderSettingsMenu()
    {
        $tabs = $this->parseWithFilter('settings/tabs', [
            'general' => _x('General', 'admin-text', 'site-reviews'),
            'reviews' => _x('Reviews', 'admin-text', 'site-reviews'),
            'submissions' => _x('Submissions', 'admin-text', 'site-reviews'),
            'schema' => _x('Schema', 'admin-text', 'site-reviews'),
            'translations' => _x('Translations', 'admin-text', 'site-reviews'),
            'addons' => _x('Addons', 'admin-text', 'site-reviews'),
            'licenses' => _x('Licenses', 'admin-text', 'site-reviews'),
        ]);
        if (empty(Arr::get(glsr()->defaults, 'settings.addons'))) {
            unset($tabs['addons']);
        }
        if (empty(Arr::get(glsr()->defaults, 'settings.licenses'))) {
            unset($tabs['licenses']);
        }
        $this->renderPage('settings', [
            'settings' => glsr(Settings::class),
            'tabs' => $tabs,
        ]);
    }

    /**
     * @return void
     * @see $this->registerSubMenus()
     * @callback add_submenu_page
     */
    public function renderToolsMenu()
    {
        $tabs = $this->parseWithFilter('tools/tabs', [
            'general' => _x('General', 'admin-text', 'site-reviews'),
            'sync' => _x('Sync Reviews', 'admin-text', 'site-reviews'),
            'console' => _x('Console', 'admin-text', 'site-reviews'),
            'system-info' => _x('System Info', 'admin-text', 'site-reviews'),
        ]);
        if (!apply_filters('site-reviews/addon/sync/enable', false)) {
            unset($tabs['sync']);
        }
        $this->renderPage('tools', [
            'data' => [
                'context' => [
                    'base_url' => admin_url('edit.php?post_type='.Application::POST_TYPE),
                    'console' => strval(glsr(Console::class)),
                    'id' => Application::ID,
                    'system' => strval(glsr(System::class)),
                ],
                'services' => apply_filters('site-reviews/addon/sync/services', []),
            ],
            'tabs' => $tabs,
            'template' => glsr(Template::class),
        ]);
    }

    /**
     * @return void
     * @action admin_init
     */
    public function setCustomPermissions()
    {
        foreach (wp_roles()->roles as $role => $value) {
            wp_roles()->remove_cap($role, 'create_'.Application::POST_TYPE);
        }
    }

    /**
     * @return string
     */
    protected function getNotices()
    {
        return glsr(Builder::class)->div(glsr(Notice::class)->get(), [
            'id' => 'glsr-notices',
        ]);
    }

    /**
     * @param string $hookSuffix
     * @return array
     */
    protected function parseWithFilter($hookSuffix, array $args = [])
    {
        if (Str::endsWith('/tabs', $hookSuffix)) {
            $page = str_replace('/tabs', '', $hookSuffix);
            foreach ($args as $tab => $title) {
                if (!glsr()->hasPermission($page, $tab)) {
                    unset($args[$tab]);
                }
            }
        }
        return apply_filters('site-reviews/addon/'.$hookSuffix, $args);
    }

    /**
     * @param string $page
     * @return void
     */
    protected function renderPage($page, array $data = [])
    {
        $data['http_referer'] = (string) wp_get_referer();
        $data['notices'] = $this->getNotices();
        glsr()->render('pages/'.$page.'/index', $data);
    }
}
