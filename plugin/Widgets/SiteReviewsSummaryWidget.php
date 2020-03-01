<?php

namespace GeminiLabs\SiteReviews\Widgets;

use GeminiLabs\SiteReviews\Database;
use GeminiLabs\SiteReviews\Shortcodes\SiteReviewsSummaryShortcode;

class SiteReviewsSummaryWidget extends Widget
{
    /**
     * @param array $instance
     * @return void
     */
    public function form($instance)
    {
        $this->widgetArgs = $this->shortcode()->normalizeAtts($instance);
        $terms = glsr(Database::class)->getTerms();
        $this->renderField('text', [
            'class' => 'widefat',
            'label' => _x('Title', 'admin-text', 'site-reviews'),
            'name' => 'title',
        ]);
        if (count(glsr()->reviewTypes) > 1) {
            $this->renderField('select', [
                'class' => 'widefat',
                'label' => _x('Which type of review would you like to use?', 'admin-text', 'site-reviews'),
                'name' => 'type',
                'options' => ['' => esc_attr_x('All review types', 'admin-text', 'site-reviews')] + glsr()->reviewTypes,
            ]);
        }
        if (!empty($terms)) {
            $this->renderField('select', [
                'class' => 'widefat',
                'label' => _x('Limit summary to this category', 'admin-text', 'site-reviews'),
                'name' => 'category',
                'options' => ['' => esc_attr_x('All Categories', 'admin-text', 'site-reviews')] + $terms,
            ]);
        }
        $this->renderField('text', [
            'class' => 'widefat',
            'default' => '',
            'description' => sprintf(_x("Separate multiple ID's with a comma. You may also enter %s to automatically represent the current page/post ID.", 'admin-text', 'site-reviews'), '<code>post_id</code>'),
            'label' => _x('Limit summary to reviews assigned to a page/post ID', 'admin-text', 'site-reviews'),
            'name' => 'assigned_to',
        ]);
        $this->renderField('text', [
            'class' => 'widefat',
            'label' => _x('Enter any custom CSS classes here', 'admin-text', 'site-reviews'),
            'name' => 'class',
        ]);
        $this->renderField('checkbox', [
            'name' => 'hide',
            'options' => $this->shortcode()->getHideOptions(),
        ]);
    }

    /**
     * @inheritDoc
     */
    protected function shortcode()
    {
        return glsr(SiteReviewsSummaryShortcode::class);
    }
}
