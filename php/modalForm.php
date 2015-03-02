<?php

if($_POST["submit"]) {
    $recipient="fmir_86@hotmail.com";
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $subject=$_POST["subject"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\nSubject: $subject\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    header('Location: http://www.fabianmiranda.com/services.shtml');
}

?>