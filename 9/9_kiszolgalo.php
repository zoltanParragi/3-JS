<?php 
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost"); // use * instead of http://localhost to allow anything reach this site

print json_encode([
    'name'=>'mrxxxx',
    'email'=>'asxxx@axx.as',
    'anything'=>'something' 
]);

?>