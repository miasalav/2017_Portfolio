<?php

$emailTo = "miaria00@gmail.com";
$name = Trim(stripslashes($_POST['name'])); 
$email = Trim(stripslashes($_POST['email'])); 
$message = Trim(stripslashes($_POST['message'])); 

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email 

if ($_POST['submit']) {
    if (mail ($emailTo, $Body, "From: <Portfolio>")) { 
        echo '<p>Your message has been sent!</p>';
    } else { 
        echo '<p>Something went wrong, go back and try again!</p>'; 
    }
}

?>