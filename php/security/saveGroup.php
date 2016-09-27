<?php
    require("../db/db.php");
    session_start();
    $id = $_POST['id'];
    $name = $_POST['name'];
    $permissions = $_POST['permissions'];
    $permissions = explode(',', $permissions);

    if ($id == 0) { //create
        $insertQuery = "insert into groups (name) values ('$name')";

        if ($resultdb = $mysqli->query($insertQuery)) {
            $id = $mysqli->insert_id;
            foreach ($permissions as $menu_id) {
                $insertQuery = "insert into permissions (menu_id, group_id) ";
                $insertQuery .= "values ('$menu_id', '$id')";
                $resultdb = $mysqli->query($insertQuery);
            }
            //$resultdb->close();
        }
    } else {
        $updateQuery = "update groups set name='$name' where id='$id'";
        if ($resultdb = $mysqli->query($updateQuery)) {
            $deleteQuery = "delete from permissions where group_id='$id'";
            if ($resultdb = $mysqli->query($deleteQuery)) {
                foreach ($permissions as $menu_id) {
                    $insertQuery = "insert into permissions (menu_id, group_id) ";
                    $insertQuery .= "values ('$menu_id', '$id')";
                    $resultdb = $mysqli->query($insertQuery);
                }
            }
    //		$resultdb->close();
        }
    }

    echo json_encode(array(
        "success" => $mysqli->connect_errno == 0,
        "msg" => $mysqli->error
    ));
    /* close connection */
    $mysqli->close();
?>