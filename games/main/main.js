
var currentTitle = localStorage.getItem('storedtitle');
var currentIcon = localStorage.getItem('storedicon');


document.title = currentTitle;
window.addEventListener('load', (event) => {
	
  console.log('page is fully loaded now atempting to restore favicon and add a site name');
     changeFavicon(currentIcon);
  
 if (localStorage.getItem("storedtitle") == null) {
        window.document.title = "LEGEND";
 }else{
    window.document.title = storedtitle;
  }
});

const changeTabTitle = () => {
    const newtitle = document.getElementById("userinput");
    if (newtitle.value == ""){ //check if the input is blank when they submit
        window.localStorage.setItem("storedtitle", "LEGEND");//set default site name
        window.document.title = "LEGEND";
        alert("No title entered. Default applied");
    } else {
        window.localStorage.setItem("storedtitle", newtitle.value);
        window.document.title = newtitle.value; //Set window's title to userinput
        alert("Title change successful");
    }
    newtitle.value = ""; //clear input
};
//Change the tabIcon
const changeTabIcon = () => {
    const newfavicon = document.getElementById("userinput");
    if (validURL(newfavicon.value)){
        changeFavicon(newfavicon.value);
        window.localStorage.setItem("storedicon", newfavicon.value);
        
        
        alert("Icon change successful");
    } else {
        
        alert("Icon change failed. Make sure you are using a valid URL");
    }
    newfavicon.value = ""; //clear input
};

//Clears Tab Icon and Title
const resetTabSettings = () => {
    window.localStorage.setItem("storedtitle", "LEGEND");//set default site name
    changeFavicon("/logo.png");
    localStorage.removeItem('storedicon');
    window.location.reload();
};

//URL Validation Regex
const validURL = (str) => {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    return !!regex.test(str);
};
document.head || (document.head = document.getElementsByTagName('head')[0]);
   function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'icon';
    link.href = src;
    if (oldLink) {
     document.head.removeChild(oldLink);
    }
document.head.appendChild(link);
}


function openSettings() {
   var varygoodvar = document.getElementById("setpan");
   varygoodvar.classList.toggle("panel-active");
}



function openSettings() {
   var varygoodvar = document.getElementById("setpan");
   varygoodvar.classList.toggle("panel-active");
}



window.addEventListener("load", () => {

const div2 = document.createElement('div');
div2.innerHTML = `<div class="gfq-wrap">
 <div id="setpan" class="gfq-panel">
     
 			<input type="button" class="tab-button" onclick="location.href='/games/main';" value="Home" />
			<button onclick="darkmode()" id="darklight" class="tab-button">null</button>
			<button onclick="yourFunction()" class="tab-button">Click Me</button>
			<hr class="rounded">
			<h4>Almost Site-Wide Tab Cloaker</h4>
			<div id="exp-menu-thebody" class="thebody">
				<p> Enter text below to change the title or an image URL to change the icon</p>
				
				<p class="input"> <input id="userinput" type="text"
						 autocomplete="off" autofocus="" placeholder="Insert tab name or image link"></p>
				

			</div>
			
	
		<div id="title-buttons" class="button-wrapper">
			<button onclick="changeTabTitle()" class="tab-button">Set Title</button>
			<button onclick="changeTabIcon()" class="tab-button">Set Icon</button>
			<button onclick="resetTabSettings()" class="tab-button">Reset</button>
			
     
     
    
</div>
    
    </div>
     <div class="gfq-badge">
        <img onclick="openSettings()" src="/logo.png" alt="Icon"/>
    </div> `;

document.body.insertAdjacentElement('afterbegin', div2);

 

});


var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '/games/files/main.css';
    link.media = 'all';
    head.appendChild(link);
}


function darkmode() {
if (localStorage.getItem("darkmode") == "false"){
	
	window.localStorage.setItem("darkmode", "true");
	document.getElementById('darklight').innerHTML = "Light";
	console.log("setting button to Light");
	console.log("the page should be Dark");
	//add style to page
		
var styles = `
	body { 
	background-color: #1a1a1a;
	}
	.w3-white,.w3-hover-white:hover { 
	color: #00adb3!important;
	background-color: #1a1a1a!important;
	}
	#myInput { 
	background-color: #1a1a1a;
	border-color: #850000;
	}
	#vertical-menu-one a { 
	background-color: #1a1a1a;
	color: #06a4aa;
	}
	`
		
	
var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.body.appendChild(styleSheet)

}else{

	window.localStorage.setItem("darkmode", "false");
	document.getElementById('darklight').innerHTML = "Dark";
	console.log("setting button to Dark");
	console.log("the page should be Light");
	//add style to page
	
	
		var lightstyles = `
	body { 
	background-color: white;
	}
	.w3-white,.w3-hover-white:hover { 
	color: black!important;
	background-color: white!important;
	}
	#myInput { 
	background-color: white;
	border-color: grey;
	}
	#vertical-menu-one a { 
	background-color: white;
	color: black;
	}
	`
	
var styleSheet1 = document.createElement("style")
styleSheet1.innerText = lightstyles
document.body.appendChild(styleSheet1)

	
}
}


window.onload = function(){

	



	
	if (localStorage.getItem("darkmode") == null){
	
window.localStorage.setItem("darkmode", "false");
	document.getElementById('darklight').innerHTML = "Dark";
console.log("setting button to Dark");
console.log("the page should be Light");

}else if (localStorage.getItem("darkmode") == "true"){

	document.getElementById('darklight').innerHTML = "Light";
	console.log("setting button to Light");
	console.log("the page should be Dark");
}else{
	

	document.getElementById('darklight').innerHTML = "Dark";
	console.log("setting button to Dark");
	console.log("the page should be Light");
	
}


};
