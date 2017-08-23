<?php
    require("dbconfig.php");

    $value = $_POST['value'];
    $id = $_POST['id'];

    $dbh = getPDO();

    $get_sql = "UPDATE random SET Label = '$value' WHERE id = '$id'";
    $result = $dbh->exec($get_sql);

    echo $result;
?>