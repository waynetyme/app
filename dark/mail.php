<?php
$to = $_POST['to'];
$subject = $_POST['subject'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$body =

'Name:  '.$name.'
Email: '.$email.'
Message:

'.$message.'

';


if(mail($to, $subject, $body, "from: ".$email)){
	echo 'success';
}

else{
	echo 'error';
}


?>
