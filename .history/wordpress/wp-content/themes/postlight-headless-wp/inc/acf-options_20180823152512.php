<?php

// Add a custom options page to associate ACF fields with
if (function_exists('acf_add_options_page')) {
    acf_add_options_page([
        'page_title' => 'Headless Settings',
        'menu_title' => 'Headless',
        'menu_slug' => 'headless-settings',
        'capability' => 'manage_options',
        'post_id' => 'headless-settings',
        'redirect' => false,
    ]);
}
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Options générales',
        'menu_title' => 'Options générales',
        'menu_slug' => 'theme-general-settings',
        'capability' => 'edit_posts',
        'redirect' => false
    ));
}
