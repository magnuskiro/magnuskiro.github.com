
function initGitJs(){
	loadMenu();

	// get GET parameters.	
	var get = window.location.search.replace( "?", "" );
	
	// get page={var}
    var page = get.match(/page=(.*)$/);
	// if page get the last instance
	page = ((page instanceof Array ) ? page=page[1] : "");
	// if category is found in get
	var category = get.match(/category=(.*)&/);
	// get the value of category={var}
	category = ((category instanceof Array ) ? category=category[1] : "");

	// load file
	loadFile(null, category, page);
}

function loadMenu(){
	var div="menu"; 
	var content = "<ul><li> Menu to come </li></ul>";

	// put categories in a list. 

//	document.write( "<div divs='"+div+"'>" + content + "</div>");
	document.getElementById("menu").innerHTML= "<div divs='"+div+"'>" + content + "</div>";
}

/**
 * div = the div that the file should load to
 * category = the category of the article to display
 * fileName = the name of the markdown file to be loaded and displayed  
 **/
function loadFile(div, category, fileName){
	div = ((div != null) ? div : "content");
	category = ((category != null) ? category : "");
	fileName = ((fileName != null) ? fileName : "welcome");
	fileName = ((fileName != "") ? fileName : "welcome");

	var div="content";
	var file = "/content/"+category+"/"+fileName+".md";

	try{
		var txtFile = new XMLHttpRequest();
		throw txtFile.open("GET", file, true);
	}
	catch(err)
	{
		var content = "Error locating file. '"+fileName+"' is not a valid filename.";
		document.getElementById("content").innerHTML = "<div divs='"+div+"'>" + content + "</div>";
  	}


	txtFile.onreadystatechange = function() {
    	if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    		if (txtFile.status === 200) {  // Makes sure it's found the file.
   				// create markdown converter 
    			var converter = new Markdown.Converter();
			
				// convert markdown to html	
				var content = converter.makeHtml(txtFile.responseText);

				// convert all markdown text to html and display it on the page.
				document.getElementById("content").innerHTML = "<div divs='"+div+"'>" + content + "</div>";
	//			document.write("<div divs='"+div+"'>" + content + "</div>");

    		}
    	}
	}
	txtFile.send(null);

  
}

