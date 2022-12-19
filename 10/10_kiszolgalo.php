<?php 
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost");

$inputs = json_decode(file_get_contents("php://input"));

print_r('Hello Mr'.$inputs->name.', your email address is: '.$inputs->email.'.') ;

/* !!! Does not work:
(Data sent with 'Content-Type', 'application/json' cannot be cought by $_POST in php !!!!)
print json_encode([    
    'name'=> $_POST["name"],
    'email'=> $_POST["email"],
    'anything'=>'something' 
]) 
*/

?>
