<?PHP
	if(isset($_POST['submit'])){
		$from = "no-reply@fabianmiranda.com";
		$sendTo = "fmir_86@hotmail.com";
		$subject = "Brief message from the site";
		$headers = "From:" . $from;
		$message = "Name: " . $_POST["name"] . "\nE-mail: " . $_POST["email"] . "\nMessage:\n" . $_POST["message"];
		mail($sendTo, $subject, $message, $headers);
	}
?>