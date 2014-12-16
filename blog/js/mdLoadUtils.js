/**
 * Created by kiro on 17/11/14.
 */

// define markdown converter.
var converter = new Markdown.Converter();
// define base location for markdown content / articles.
//var baseLocation='file:///home/kiro/repos/magnuskiro.github.com/blog/articles/';   // works.
// uncomment for prod
var baseLocation='file:///home/blog/articles/';   // works.

function createMDmenu(articles){
    var doc = document.getElementById("md-menu");
    for(var a in articles){
        //console.log(articles[a]);
        // create menu  with anchors.
        var entry = "<h4 onclick=\"loadMD('"+articles[a]+"', '#md')\">"+capitaliseFirstLetter(articles[a])+"</a></h4>";
        //console.log(entry);
        doc.innerHTML += entry;
    }
    //console.log("test");
}

function capitaliseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// example: loadMD('articles/ingredients.md', '#sub-content');
function loadMD(file, tag){
    var loc = location.href;
    console.log(typeof loc);
    if(loc.indexOf("#") > -1){
        loc = location.href.split('#')[0];
    }
    console.log(loc);

    if(file === ""){
        file = "missionStatement";
    }
    console.log(loc+"#"+file);
    location.href = loc+"#"+file;

    var url = baseLocation+file+".md";
    console.log(url);
    // load article content.
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'text',
        success: function(text) {
            // insert html converted markdown into content div.
            //console.log("Loading file: "+url);
            $(tag).html(converter.makeHtml(text));
        }
    });

}

// example: createSubMenuItems(articles, 'ingredients');
function createSubMenuItems(articles, parentPage){
    // create sub menu.
    var subMenu = document.getElementById("sub-menu");
    // for articles in this category
    for(var art in articles){
        // add menu element in #sub-menu
        subMenu.innerHTML += "<li onclick=\"viewSelectedSubPage('" + articles[art] + "', '" + parentPage + "')\">" + articles[art] + "</li>";
    }
}

function viewSelectedSubPage(name, parentPage){
    console.log("loading content| "+name+":"+parentPage);
    loadMD('articles/'+parentPage+"/"+name+".md", '#sub-content');
}

