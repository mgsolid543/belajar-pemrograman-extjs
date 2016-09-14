<?php
    $server     = "localhost";
    $user       = "root";
    $pass       = "admin";
    $dbName     = "sakila";

    $connnect = mysql_connect($server,$user,$pass) or die (mysql_error());

    $data = mysql_select_db($dbName, $connnect) or die(mysql_error());
?>