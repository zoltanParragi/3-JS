<?php
$inputs = json_decode( file_get_contents("php://input") );

$errors=[];

if( filter_var( $inputs->email, FILTER_VALIDATE_EMAIL) == false ){
    $errors["email"] = "Az email invalid.";
}

if( $inputs->pw1 != $inputs->pw2 OR empty($inputs->pw1) ){
    $errors["pw1"] = "Baj van a jelszóval.";
}

if( count( $errors ) > 0 ) {
    print json_encode($errors);
} else {
    print json_encode(['status'=>'ok']);
}
?>