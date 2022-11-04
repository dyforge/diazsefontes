<?php
    include("config.php");
    header("Access-Control-Allow-Origin: https://hxj0776.uta.cloud/");
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    define('WP_USE_THEMES', false);
    require('../phase2/blog/wp-blog-header.php');
    $postdata = file_get_contents("php://input");
    $posts_arr = [];
    if ($_SERVER['REQUEST_METHOD'] == 'GET'){
        $posts = get_posts('numberposts=15&order=ASC&orderby=post_title');
        header("HTTP/1.1 200 OK");
        //new lines
        foreach ($posts as $post) : setup_postdata( $post );
            $obj=new stdClass;
            $obj->post=$post;
            $obj->author=the_author();
            array_push($posts_arr, $obj);
        endforeach;    
    }
    echo json_encode($posts_arr)
?>
