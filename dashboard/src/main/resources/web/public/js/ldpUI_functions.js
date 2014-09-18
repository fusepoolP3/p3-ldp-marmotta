/*
* As a UI developer I want to be able to interact with LDP from JavaScript so I can create UIs later
* a) Basic LDP REST read/write interactions with appropriate JS RDF libs
* b) Basic UI where I can upload something to LDPC
*
* TODO its currently only read-write texts, without using LDP
*
*/

var openedContainer = "";

function get() {
	var container = $("#open-container").val();
	
	if($.trim(container)=="") {
		showMessage("Enter a container");
	}
	else {
		getContent(container);
	}
}

function getContent(container) {
	var base = $("#base").val();
	
	var ajaxRequest = $.ajax({	type: "GET",
								url: base + "/content/text/plain/" + container,
								async: true });	
		
	ajaxRequest.done(function(response) {
		$("#textInput").val(response);
		openedContainer = container;
	});
}

function save() {
	switch($('input[name=save-as]:checked', '#simple-ui-form').val()) {
		case "0":								// "Save"
			saveContent(openedContainer);
		break;
		case "1":								// "Save to a random container"
			putContent();
		break;
		case "2":								// "Save here: container"
			var container = $("#save-container").val();
			if($.trim(container)=="") {
				showMessage("Enter a container which you would like to use");
			}
			else {
				saveContent(container);
			}
		break;
	}
}

function putContent() {

	var base = $("#base").val();
	var textData = $("#textInput").val();
	
	var ajaxRequest = $.ajax({	type: "POST",
								url: base + "/resource",
								async: true });	
								
	ajaxRequest.done(function(responseContainer) {
		var container = responseContainer.substr(base.length+("/resource/").length);
		saveContent(container);
	});
}

function saveContent(container) {
		
	var base = $("#base").val();
	var textData = $("#textInput").val();
	
	var ajaxRequest = $.ajax({	type: "PUT",
								url: base + "/content/text/plain/" + container,
								data: textData,
								async: true });	
		
	ajaxRequest.done(function(response) {
		$("#open-container").val(container);
		openedContainer = container;
	});
}

function showMessage(message) {
	alert(message);
}

