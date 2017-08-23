<?php
    ini_set('display_errors',1);
    require("dbconfig.php");

    $dbh = getPDO();

    $get_sql = "SELECT * FROM NewSentiments WHERE label is NULL";
    $result = getQueryResults($get_sql);

    if(trim($result['error'][2] == "")){

        if($result['count'] > 0){
            $array = array();
            $get_result = $result['query']->fetchAll(PDO::FETCH_ASSOC);

            foreach($get_result as $row){
                array_push($array, $row['id']);
            }

            $randomKey = array_rand($array, 1);

            $get_sql = "SELECT * FROM NewSentiments WHERE id = '$array[$randomKey]'";
            $result2 = getQueryResults($get_sql);

            if(trim($result2['error'][2]) == ""){
                if($result2['count'] == 1){
                    $get_result2 = $result2['query']->fetchAll(PDO::FETCH_ASSOC);
                }               

                echo json_encode($get_result2);
            }
        }
    }

    function getQueryResults($get_sql){
        $get_query = $GLOBALS['dbh']->prepare($get_sql);
        $get_query->execute();
        $get_error = $get_query->errorInfo();
        $get_count = $get_query->rowCount();

        return array(
            "error"=>$get_error,
            "count"=>$get_count,
            "query"=>$get_query
        );
    }
    
?>