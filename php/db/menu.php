<?php
    require("db/db.php");

    session_start();

    $username = $_SESSION[username];

    $queryString = "select p.menu_id menuId from user u ";
    $queryString .= "inner join permissions p on u.group_id = p.group_id ";
    $queryString .= "inner join menu m on p.menu_id = m.id ";
    $queryString .= "where u.username = '$username'";

    $folder = array();

    if ($resultdb = $mysqli->query($queryString)) {
        $in = '(';
        while ($user = $resultdb->fetch_assoc()) {
            $in .= $user['menuId'] . ",";
        }
        $in = substr($in, 0, -1);

        $resultdb->free();

        $sql = "select * from menu where parent_id is null ";
        $sql .= "and id in $in";

        if ($resultdb = $mysqli->query($sql)) {
            while ($r = $resultdb->fetch_assoc()) {
                $sqlquery = "select * from menu where parent_id = '";
                $sqlquery .= $r['id'] . "' and id in $in";
                if ($nodes = $mysqli->query($sqlquery)) {
                    $count = $nodes->num_rows;
                    if ($count > 0) {
                        $r['leaf'] = false;
                        $r['items'] = array();
                        while ($item = $nodes->fetch_assoc()) {
                            $item['leaf'] = true;
                            $r['items'][] = $item;
                        }
                    }
                    $folder[] = $r;
                }
            }
        }
        $resultdb->close();
    }

    $mysqli->close();

    echo json_encode(array(
        "items" => $folder
    ));
?>