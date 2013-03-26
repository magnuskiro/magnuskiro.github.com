
function init(){
	loadMenu();
	loadFile("welcome.md");
}

function loadMenu(){
	var clas="menu"; 
	var content = "menu goes here! <ul><li>first</li></ul>";
	document.write("<div class='"+clas+"'>" + content + "</div>");
}

function loadFile(fileName){
	var clas="content"; 

	var txtFile = new XMLHttpRequest();
	txtFile.open("GET", "/pages/"+fileName, true);
	txtFile.onreadystatechange = function() {
    	if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    		if (txtFile.status === 200) {  // Makes sure it's found the file.
   				// create markdown converter 
    			var converter = new Markdown.Converter();
			
				// convert markdown to html	
				var content = converter.makeHtml(txtFile.responseText);

				// convert all markdown text to html and display it on the page.
				document.write("<div class='"+clas+"'>" + content + "</div>");

    		}
    	}
	}
	txtFile.send(null);
}

