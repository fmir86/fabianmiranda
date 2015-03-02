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
	
	//Query	 
	$query = 'SELECT * FROM scores ORDER BY points DESC LIMIT 10';
	$results = mysql_query($query);
		
	echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n";
	echo "<users>\n";	

	while ($line = mysql_fetch_assoc($results)){
		echo "<user name='" . $line['user'] . "' score='" . $line['points'] . "'>" . "</user>";
	}
	
	echo "</users>";
	
	
	mysql_close($link);

?>