<?php 

/*
Plugin Name: My First Amazing Plugin
Description: This plugin will not change your life
 */

add_filter('the_content', 'amazingContentEdits');

function amazingContentEdits($content) {
  $content = $content . '<p>All content belongs to Fictional University</p>';
  return $content;
}