<?php
// Redirect individual post and pages to the REST API endpoint
if (is_single()) {
    if (is_singular('service')) {
        header('Location: /wp-json/wp/v2/services/service' . get_queried_object()->ID);
    } else {
        header('Location: /wp-json/wp/v2/posts/' . get_post()->ID);
    }

} elseif (is_page()) {
    header('Location: /wp-json/wp/v2/pages/' . get_queried_object()->ID);
}elseif (is_page('services')) {
    header('Location: /wp-json/wp/v2/services/' . get_queried_object()->ID);
} elseif (is_page('a-propos')) {
    header('Location: /wp-json/wp/v2/a-propos/' . get_queried_object()->ID);
}else {
    header('Location: /wp-json/');
}
