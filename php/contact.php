<?php

if($_POST["submit"]) {
    $recipient="fmir_86@hotmail.com";
    $subject="A message from the site [Footer]";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    header('Location: http://www.fabianmiranda.com');
}

?>