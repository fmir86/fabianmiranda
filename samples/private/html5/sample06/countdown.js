var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];


function getTime() {
	
	var now = new Date();
	var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours() - 5, now.getUTCMinutes(), now.getUTCSeconds());
		
	y2k = new Date(monthNames[now.getUTCMonth()+1] + " 25 " + now.getUTCFullYear() + " 12:00:00");
	console.log(y2k);
	
	document.getElementById("copy5").innerHTML = "Join Us " + monthNames[now.getUTCMonth()+1] + " 25th at 12:00PM GMT-6";
	
	days = (y2k - now_utc) / 1000 / 60 / 60 / 24;
	daysRound = (Math.floor(days) > 9) ? Math.floor(days) : "0" + Math.floor(days);
	
	hours = (y2k - now_utc) / 1000 / 60 / 60 - (24 * daysRound);
	hoursRound = (Math.floor(hours) > 9) ? Math.floor(hours) : "0" + Math.floor(hours);
	
	minutes = (y2k - now_utc) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
	minutesRound = (Math.floor(minutes) > 9) ? Math.floor(minutes) : "0" + Math.floor(minutes);
	
	seconds = (y2k - now_utc) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
	secondsRound = (Math.round(seconds) > 9) ? Math.round(seconds) : "0" + Math.round(seconds);
		
	document.getElementById("counter").innerHTML = daysRound + ":" + hoursRound + ":" + minutesRound + ":" + secondsRound + " ";
	newtime = window.setTimeout("getTime();", 1000);
}
