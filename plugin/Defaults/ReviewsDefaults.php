<?php

namespace GeminiLabs\SiteReviews\Defaults;

use GeminiLabs\SiteReviews\Defaults\DefaultsAbstract as Defaults;

class ReviewsDefaults extends Defaults
{
    /**
     * @var array
     */
    public $casts = [
        'author_id' => 'int',
        'ip_address' => 'string',
        'offset' => 'int',
        'order' => 'string',
        'orderby' => 'string',
        'page' => 'int',
        'pagination' => 'string',
        'per_page' => 'int',
        'rating' => 'int',
        'status' => 'string',
    ];

    /**
     * @var array
     */
    public $mapped = [
        'assigned_to' => 'assigned_posts',
        'category' => 'assigned_terms',
        'count' => 'per_page', // @deprecated in v4.1.0
        'display' => 'per_page',
        'user' => 'assigned_users',
    ];

    /**
     * @var array
     */
    public $sanitize = [
        'email' => 'email',
        'post__in' => 'array-int',
        'post__not_in' => 'array-int',
        'type' => 'key',
    ];

    /**
     * @return array
     */
    protected function defaults()
    {
        return [
            'assigned_posts' => '',
            'assigned_terms' => '',
            'assigned_users' => '',
            'author_id' => '',
            'email' => '',
            'ip_address' => '',
            'offset' => '',
            'order' => 'DESC',
            'orderby' => 'date',
            'page' => 1,
            'pagination' => false,
            'per_page' => 10,
            'post__in' => [],
            'post__not_in' => [],
            'rating' => '',
            'status' => 'approved',
            'type' => '',
        ];
    }
}
