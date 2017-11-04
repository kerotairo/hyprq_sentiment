<?php
    

    function getPDO(){
        $dsn = 'mysql:dbname=postswithsentiments;host=54.244.61.6;charset=utf8';
        $user = 'root';
        $password = 'GioRan123';
        
        try{
            $dbh = new PDO($dsn, $user, $password);
            return $dbh;
        }
        catch(PDOException $e){
            die('Could not connect: ' . $e->getMessage());
        }    
    }
    

?>