<?php
    $email = $_POST["email"];

    $pass = $_POST["pass"];
    // $pass = md5($pass."asda");

    $mysql = new mysqli("localhost", "root", "", "register-bg");
    
    $result = $mysql->query("SELECT * FROM `users` WHERE `email` = '$email' AND `pass` = '$pass'");
    if ($result->fetch_assoc()){
        $mysql->close();
        echo json_encode(array('email' => "1"));
    }
    else {
        $result = $mysql->query("SELECT * FROM `users` WHERE `email` = '$email'");
        $mysql->close();
        if ($result->fetch_assoc()){
            echo json_encode(array('email' => $email));
        }
        else{
            echo json_encode(array('email' => "0"));
        }
    }