<?php
// Redirect individual post and pages to the REST API endpoint
if (is_single()) {
    if (is_singular('portfolio')) {
        header('Location: /wp-json/wp/v1/services/' . get_queried_object()->ID);
    } else {
        header('Location: /wp-json/wp/v1/posts/' . get_post()->ID);
    }

} elseif (is_page()) {
    header('Location: /wp-json/wp/v1/pages/' . get_queried_object()->ID);
} else {
    header('Location: /wp-json/');
}
