<?php
    require("../db/db.php");
    session_start();
    $id = $_POST['id'];
    $deleteQuery = "delete from user where id = '$id'";
    $resultdb = $mysqli->query($deleteQuery);

    echo json_encode(array(
        "success" => $mysqli->connect_errno == 0,
        "msg" => $mysqli->error
    ));
    $mysqli->close();
?>