<?php
    require ("../db/db.php");
    session_start();
    $groupId = isset($_REQUEST['group']);
    $folder = array();
    $sql = "select * from menu where parent_id is null";
    if ($resultdb = $mysqli->query($sql)) {
        while ($r = $resultdb->fetch_assoc()) {
            $id = $r['id'];
            $queryString = "select menu_id menuId from permissions ";
            $queryString .= " where group_id = '$groupId' ";
            $queryString .= " and menu_id = '$id' ";

            if ($checked = $mysqli->query($queryString)) {
                $r['checked'] = $checked->num_rows > 0;
            }
            if ($nodes = $mysqli->query("SELECT * FROM MENU WHERE parent_id = '". $r['id'] ."'")) {
                $count = $nodes->num_rows;
                if ($count > 0) {
                    $r['expanded'] = true;
                    $r['children'] = array();
                    while ($item = $nodes->fetch_assoc()) {
                        $id = $item['id'];
                        $queryString = "select menu_id menuId from permissions ";
                        $queryString .= "where group_id = '$groupId' ";
                        $queryString .= "and menu_id = '$id'";
                        if ($checked = $mysqli->query($queryString)) {
                            $item['checked'] = $checked->num_rows > 0;
                        }
                        $item['leaf'] = true;
                        $r['children'][] = $item;
                    }
                } else {
                    $r['leaf'] = true;
                }
                $folder[] = $r;
            }
        }
    }
    $mysqli->close();
    echo json_encode($folder);
?>