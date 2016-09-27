<?php
    require("../db/db.php");
    session_start();
    $id = $_POST['id'];
    $deleteQuery = "delete from permissions where group_id='$id'";

    if ($resultdb = $mysqli->query($deleteQuery)) {
        $deleteQuery = "delete from groups where id='$id'";
        $resultdb = $mysqli->query($deleteQuery);
    }

    echo json_encode(array(
        "success" => $mysqli->connect_errno == 0,
        "msg" => $mysqli->error
    ));
    /* close connection */
    $mysqli->close();
?>