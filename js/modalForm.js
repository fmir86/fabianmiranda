var elementsCreated = false;

var add = document.addEventListener ? 'addEventListener' : 'attachEvent';
var remove = document.removeEventListener ? 'removeEventListener' : 'detachEvent';
var modalContainer, formBox, closeBtn, formWrap, nameField, emailField, subjectField, messageField, nameLabel, emailLabel, subjectLabel, messageLabel; 



for( var i = 0; i < document.getElementsByClassName("quoteFormBtn").length; i++){
	document.getElementsByClassName("quoteFormBtn")[i][add]('click', createForm);
}

function createForm(){
	if(modalContainer == null){
		
		modalContainer = document.createElement("div");
		formBox = document.createElement("div");
		
		closeBtn =  document.createElement("div");
		closeBtn.innerHTML = "X";

		formWrap = document.createElement("form");
		
		formWrap.method = "POST";
		formWrap.action = "php/modalForm.php";
		
		formWrap.appendChild( createFormObj("p", null, null, "Please explain your needs, questions or thoughts and I will be writting you back very shortly. Thanks for your interest!", "formIntro") );
		
		formWrap.appendChild( createFormObj("label", null, null, "Name:", "formLabels", null) );
		formWrap.appendChild( createFormObj("input", "text", "name", null, "formFields", null) );

		formWrap.appendChild( createFormObj("label", null, null, "Email:", "formLabels", null) );
		formWrap.appendChild( createFormObj("input", "email", "email", null, "formFields", null) );
		
		formWrap.appendChild( createFormObj("label", null, null, "Subject:", "formLabels", null) );
		formWrap.appendChild( subjectField = createFormObj("input", "text", "subject", null, "formFields", null) );
		
		formWrap.appendChild( createFormObj("label", null, null, "Message:", "formLabels", null) );
		formWrap.appendChild( createFormObj("textarea", null, "message", null, "formFields", null) );
		
		formWrap.appendChild( createFormObj("input", "Submit", "submit", null, "submitButton", "Submit") );
		
		modalContainer.className = "modalContainer";
		formBox.className = "formBox";
		closeBtn.className = "closeBtn";
			
		formBox.appendChild(formWrap);
		formBox.appendChild(closeBtn);
		
		modalContainer.appendChild(formBox);
		
	}
	
	document.body.appendChild(modalContainer);
	
	closeBtn[add]("click", closeWindow);
	modalContainer[add]("click", closeWindow);
	
	document.getElementsByName("subject")[0].value = this.parentNode.getElementsByTagName("h2")[0].textContent || 
													 this.parentNode.getElementsByTagName("h2")[0].innerText;
													 
	document.getElementsByName("message")[0].rows = "4";
}


function createFormObj(tagName, elemType, elemName, elemInnerText, elemClass, elemValue){
	var elem = document.createElement(tagName);
	if(elemType != null || elemType != undefined) elem.type = elemType;
	if(elemName != null || elemName != undefined) elem.name = elemName;
	if(elemInnerText != null || elemInnerText != undefined) elem.innerHTML = elemInnerText;
	if(elemClass != null || elemClass != undefined) elem.className = elemClass;
	if(elemValue != null || elemValue != undefined) elem.value = elemValue;
	return elem;
}

function closeWindow(evt){
	if(evt.target.className == "modalContainer" || evt.target.className == "closeBtn"){
		closeBtn[remove]("click", closeWindow);
		modalContainer[remove]("click", closeWindow);
		document.body.removeChild(modalContainer);
	}
}