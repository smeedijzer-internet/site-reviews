<?php

namespace GeminiLabs\SiteReviews\Addons;

abstract class Hooks
{
    protected $addon;
    protected $basename;
    protected $controller;

    /**
     * @return void
     */
    public function run()
    {
        add_action('init',                                                 [$this->addon, 'update']);
        add_action('admin_enqueue_scripts',                                [$this->controller, 'enqueueAdminAssets']);
        add_action('enqueue_block_editor_assets',                          [$this->controller, 'enqueueBlockAssets']);
        add_action('wp_enqueue_scripts',                                   [$this->controller, 'enqueuePublicAssets']);
        add_filter('plugin_action_links_'.$this->basename,                 [$this->controller, 'filterActionLinks']);
        add_filter('site-reviews/config',                                  [$this->controller, 'filterConfigPath']);
        add_filter('site-reviews/addon/documentation',                     [$this->controller, 'filterDocumentation']);
        add_filter('site-reviews/gettext/'.$this->addon->id,               [$this->controller, 'filterGettext'], 10, 2);
        add_filter('site-reviews/gettext_with_context/'.$this->addon->id,  [$this->controller, 'filterGettextWithContext'], 10, 3);
        add_filter('site-reviews/ngettext/'.$this->addon->id,              [$this->controller, 'filterNgettext'], 10, 4);
        add_filter('site-reviews/ngettext_with_context/'.$this->addon->id, [$this->controller, 'filterNgettextWithContext'], 10, 5);
        add_filter('site-reviews/path',                                    [$this->controller, 'filterFilePaths'], 10, 2);
        add_filter('site-reviews/addon/settings',                          [$this->controller, 'filterSettings']);
        add_filter('site-reviews/addon/system-info',                       [$this->controller, 'filterSystemInfo']);
        add_filter('site-reviews/translation/entries',                     [$this->controller, 'filterTranslationEntries']);
        add_filter('site-reviews/translator/domains',                      [$this->controller, 'filterTranslatorDomains']);
        add_action('init',                                                 [$this->controller, 'registerBlocks']);
        add_action('plugins_loaded',                                       [$this->controller, 'registerLanguages']);
        add_action('init',                                                 [$this->controller, 'registerShortcodes']);
        add_action('init',                                                 [$this->controller, 'registerTinymcePopups']);
        add_action('widgets_init',                                         [$this->controller, 'registerWidgets']);
        add_action('site-reviews/addon/settings/'.$this->addon->slug,      [$this->controller, 'renderSettings']);
    }
}
