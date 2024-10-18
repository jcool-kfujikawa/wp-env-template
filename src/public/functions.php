<?php
  // 投稿者アーカイブを無効化する
  add_filter( 'author_rewrite_rules', '__return_empty_array' );

  function disable_author_archive() {
    if( isset($_GET['author']) || preg_match('#/author/.+#', $_SERVER['REQUEST_URI']) ){
      wp_redirect( home_url() );
      exit;
    }
  }

  add_action('init', 'disable_author_archive');
