<?php
    

    function getPDO(){
        $dsn = 'mysql:dbname=postswithsentiments;host=localhost;charset=utf8';
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