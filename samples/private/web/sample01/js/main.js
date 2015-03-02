$( document ).ready(function() {
	var dropdown = $('#selector');
	var content =$("#ticketsInfo");
	
	dropdown.val("none");
				
	dropdown.change(function() {
	  
	  if(this.value == 'none'){
	  	$("#logosContainer img").css("opacity", 1);
		content.contents().remove();
		$("#dynamicLink").contents().remove();
	  }else{
		content.load("info/" + this.value + ".html");
		$("#logosContainer img").css("opacity", 0.2);
		$('#' + this.value).css("opacity", 1);
		$("#dynamicLink").html(setDynamicLink(this.value));
	  }
	  
	});
	
	$("#logosContainer img").click(function(){
		//$("#container").css("padding-left", 15);
		
		  $("#logosContainer img").css("opacity", 0.2);
		  $('#' + this.id).css("opacity", 1);
		  content.load("info/" + this.id + ".html");
		  $("#dynamicLink").html(setDynamicLink(this.id));
		  dropdown.val(this.id);
	});
	
	function setDynamicLink(item){
		switch(item){
			case "ohiostate": return "<a href='https://www.huntington.com/special/buckeye.htm'>Get a custom Buckeyes Banking debit card</a>";
				break;
			case "bluejackets": return "<a href='https://www.huntington.com/bluejacketsbanking/'>Get a custom Columbus Blue Jackets Banking debit card</a>";
				break;
			case "msuspartans": return "<a href='https://www.huntington.com/spartansbanking/'>Get a custom Michigan State Spartans Banking debit card</a>";
				break;
			case "detroitlions": return "<a href='https://www.huntington.com/detroitlionsbanking/'>Get a custom Detroit Lions Banking debit card</a>";
				break;
			case "colts": return "<a href='https://www.huntington.com/coltsbanking/'>Get a custom Indianapolis Colts Banking debit card</a>";
				break;
			case "ksuflashes": return "<a href='https://www.huntington.com/goldenflashesbanking/'>Get a custom Kent State Golden Flashes Banking debit card</a>";
				break;
			case "monsters": return "<a href='https://www.huntington.com/monstersbanking/'>Get a custom Lake Erie Monsters Banking debit card</a>";
				break;
			case "csuvikings": return "<a href='https://www.huntington.com/vikingsbanking/'>Get a custom Cleveland State Vikings Banking debit card</a>";
				break;
			default: return null;
				break;
		}
	}
		
});


