<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $db = "todo";

    // Create connection
    $conn = new mysqli($host, $user, $password, $db);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        echo "Connection Established Successfully.";
        echo "<br/>";
    }


    // Pull data from Tasks table:
    $result = $conn->query( "SELECT * FROM task");

    $rows = $result->fetch_all(MYSQLI_ASSOC);

    foreach ($rows as $row) {
        printf("%s - %s \n", $row["id"], $row["text"]);
        echo "<br/>";
    }


?>