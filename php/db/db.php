<?php
    $server     = "localhost";
    $user       = "root";
    $pass       = "admin";
    $dbName     = "sakila";

    $mysqli = new mysqli($server, $user, $pass, $dbName);

    /* check connection */
    if ($mysqli->connect_errno) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
?>