<?php
	//Include database connection details
	require_once('config.php');

    //Connect to mysql server
	$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);
	if(!$link) {
		die('Failed to connect to server: ' . mysql_error());
	}
	
	//Select database
	$db = mysql_select_db(DB_DATABASE);
	if(!$db) {
		die("Unable to select database");
	}

	//Function to sanitize values received from the form. Prevents SQL injection
	function clean($str) {
		$str = @trim($str);
		if(get_magic_quotes_gpc()) {
			$str = stripslashes($str);
		}
		return mysql_real_escape_string($str);
	}

	//Sanitize the POST values
	$user = clean($_POST['user']);
	$points = clean($_POST['points']);

	//Create INSERT query
	$qry = "INSERT INTO scores(user,points) VALUES('$user','$points')";
	$result = @mysql_query($qry);
echo "writing=Ok";
exit();
mysql_close();
	
?>
	