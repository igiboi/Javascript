<?php

function university_post_types()
{
    // Event post type
    register_post_type('event', array(
        'capability_type' => 'events',
        'map_meta_cap' => true, 
        'rewrite' => array(
            'slug' => 'events'
        ),
        'supports' => array(
            'title',
            'editor',
            'excerpt'
        ),
        'has_archive' => true,
        'public' => true,
        'labels' => array(
            'name' => 'Events',
            'add_new_item' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'all_items' => 'All Events',
            'singular_name' => 'Event'
        ),
        'menu_icon' => 'dashicons-calendar-alt'
    ));

    // Program post type
    register_post_type('program', array(
        'rewrite' => array(
            'slug' => 'programs'
        ),
        'supports' => array(
            'title'
        ),
        'has_archive' => true,
        'public' => true,
        'labels' => array(
            'name' => 'Programs',
            'add_new_item' => 'Add New Program',
            'edit_item' => 'Edit Programs',
            'all_items' => 'All Programs',
            'singular_name' => 'Program'
        ),
        'menu_icon' => 'dashicons-awards'
    ));
    
    
    //Professor post type
    register_post_type('professor', array(
        'supports' => array(
            'title',
            'editor',
            'thumbnail'
        ),
        'public' => true,
        'labels' => array(
            'name' => 'Professors',
            'add_new_item' => 'Add New Professor',
            'edit_item' => 'Edit Professors',
            'all_items' => 'All Professors',
            'singular_name' => 'Professor'
        ),
        'menu_icon' => 'dashicons-welcome-learn-more'
    ));
    
    
    //Campuses post type
    register_post_type('campus', array(
        'capability_type' => 'campus',
        'map_meta_cap' => true, 
        'rewrite' => array(
            'slug' => 'campuses'
        ),
        'supports' => array(
            'title',
            'editor',
            'excerpt'
        ),
        'has_archive' => true,
        'public' => true,
        'labels' => array(
            'name' => 'Campuses',
            'add_new_item' => 'Add New Campus',
            'edit_item' => 'Edit Campus',
            'all_items' => 'All Campuses',
            'singular_name' => 'Campus'
        ),
        'menu_icon' => 'dashicons-location-alt'
    ));
    
    //Note Post Type 
    register_post_type('note', array(
        'capability_type' => 'note',
        'map_meta_cap' => true,
        'show_in_rest' => true,
        'supports' => array(
            'title',
            'editor'
        ),
        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Notes',
            'add_new_item' => 'Add New Note',
            'edit_item' => 'Edit Notes',
            'all_items' => 'All Notes',
            'singular_name' => 'Notes'
        ),
        'menu_icon' => 'dashicons-welcome-write-blog'
    ));
    
    
    
    //Like post type for professors
    register_post_type('like', array(
        'supports' => array(
            'title',
        ),
        'public' => false,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Likes',
            'add_new_item' => 'Add New Like',
            'edit_item' => 'Edit Likes',
            'all_items' => 'All Likes',
            'singular_name' => 'Likes'
        ),
        'menu_icon' => 'dashicons-heart'
    ));
    
    
    
}

add_action('init', 'university_post_types');