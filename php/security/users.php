<?php
    require ("../db/db.php");

    session_start();
    $groupId = isset($_REQUEST['group']);
    $sql = "select * from user";

    if ($groupId) {
        $sql .= " where group_id = '".$_REQUEST['group']."'";
    }

    $result = array();
    if ($resultdb = $mysqli->query($sql)) {
        while ($profile = $resultdb->fetch_assoc()) {
            $result[] = $profile;
        }
        $resultdb->close();
    }

    echo json_encode(array(
        "success" => $mysqli->connect_errno == 0,
        "data" => $result
    ));

    $mysqli->close();
?>