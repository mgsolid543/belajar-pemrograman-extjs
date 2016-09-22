<?php
    require ("../db/db.php");
    session_start();

    $id = $_POST['id'];
    $username = $_POST['username'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $group = $_POST['group_id'];
    $password = "e10adc3949ba59abbe56e057f20f883e"; //123456 - default password
    $uploads_dir = '../../resources/profileImages';

    if ($id == "") $id = 0;

    if (isset($_FILES)) {
        $tmpname = $_FILES['picture']['tmp_name'];
        $filename =  $_FILES['picture']['name'];
        move_uploaded_file($tmpname, "$uploads_dir/$filename");
    }

    if ($id == 0) { // insert
        $insertQuery = "insert into user (name, username, password, email, picture, group_id) ";
        $insertQuery .= "values ('$name', '$username', '$password', '$email', '$filename', '$group')";

        if ($resultdb = mysqli_query($insertQuery)) {
            $id = $mysqli->insert_id;
        }
    } else {
        $updateQuery = "update user set ";
        $updateQuery .= "name = '$name', ";
        $updateQuery .= "username = '$username', ";
        $updateQuery .= "email = '$email', ";
        if ($filename != null) {
            $updateQuery .= "picture = '$filename', ";
        }
        $updateQuery = "group_id = '$group', ";
        $updateQuery = "where id = '$id'";

        $resultdb = $mysqli->query($updateQuery);
    }

    header('Content-type: text/html');
    echo json_encode(array(
        "success" => $mysqli->error == '',
        "msg" => $mysqli->error,
        "id" => $id
    ));
    $mysqli->close();
?>