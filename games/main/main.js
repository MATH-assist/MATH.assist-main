
var currentTitle = localStorage.getItem('storedtitle');
var currentIcon = localStorage.getItem('storedicon');
var iscw = localStorage.getItem('cw');
var locvarask = localStorage.getItem('leave'); // var for ask before leave


document.title = currentTitle;
window.addEventListener('load', (event) => {
	
  console.log('page is fully loaded now atempting to restore favicon and add a site name and set theme');


	if (localStorage.getItem('cw') == "true"){
	alert("hello cameron")
	window.location.reload("https://google.com")
		
	}
	
	
	//
window.localStorage.setItem("settings123", "closed"); // close setting on load
	
const div2 = document.createElement('div');
div2.innerHTML = `<div class="gfq-wrap">
 
    
    </div>
     <div class="gfq-badge">
        <img onclick="openSettings()" src="/logo.png" alt="Icon"/>
    </div> `;

document.body.insertAdjacentElement('afterbegin', div2);

	
	
if (localStorage.getItem('pagedark') == "true"){
	
	localStorage.setItem("pagedark", "false");
  setlight();

}else{

	localStorage.setItem("pagedark", "false");
  setlight();

	
}

 
	//
	
 if (localStorage.getItem("storedtitle") !== "LEGEND" && localStorage.getItem("storedtitle") !== null){
  window.document.title = storedtitle;
 }else if (localStorage.getItem("storedtitle") == null){
    window.localStorage.setItem("storedtitle", "LEGEND");//set default site name
  }else{
  window.localStorage.setItem("storedtitle", "LEGEND");//set default site name
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



if (localStorage.getItem("settings123") == "open"){
const elementset1 = document.getElementById("setpan");
elementset1.remove();
window.localStorage.setItem("settings123", "closed");


   }else{
   
   const div2 = document.createElement('div');
div2.innerHTML = `<div class="gfq-wrap">
 <div id="setpan" class="panel-active">
     
 			<input type="button" class="tab-button" onclick="location.href='/games/main';" value="Home" />
			<button onclick="darkmode_sw()" id="darklight" class="tab-button">dark</button>
			<button onclick="yourFunction()" class="tab-button">Click Me</button>
			<button onclick="askFunction()" id="askonclose" class="tab-button">unblock</button>
			<button onclick="dieFunction()" id="cwt" class="tab-button">cw</button>
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
			<button onclick="setGoogle()" class="tab-button">Google</button>
			<button onclick="setClassroom()" class="tab-button">Classroom</button>
			<button onclick="setDrive()" class="tab-button">Drive</button>
     
     
    
</div>
</div> `;

document.body.insertAdjacentElement('afterbegin', div2);
window.localStorage.setItem("settings123", "open");
   
   
}
}


function setGoogle() { 
	changeFavicon("https://seeklogo.com/images/N/new-google-favicon-logo-5E38E037AF-seeklogo.com.png");
	window.localStorage.setItem("storedtitle", "Google");//set google site name to storage
	window.document.title = "Google";
	window.localStorage.setItem("storedicon", "https://seeklogo.com/images/N/new-google-favicon-logo-5E38E037AF-seeklogo.com.png");//set google site icon to storage
}
function setClassroom() { 
	changeFavicon("https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Classroom_Logo.svg/512px-Google_Classroom_Logo.svg.png?20221017163738");
	window.localStorage.setItem("storedtitle", "Classroom");//set google site name to storage
	window.document.title = "Classroom";
	window.localStorage.setItem("storedicon", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Google_Classroom_Logo.svg/512px-Google_Classroom_Logo.svg.png?20221017163738");//set google site icon to storage
}
function setDrive() { 
	changeFavicon("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png");
	window.localStorage.setItem("storedtitle", "Google Drive");//set google site name to storage
	window.document.title = "Google Drive";
	window.localStorage.setItem("storedicon", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png");//set google site icon to storage
}







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


function darkmode_sw() {
if (localStorage.getItem('pagedark') == "false"){
  setdark();

}else{
  setlight();

	
}
}


function dieFunction() {
if (localStorage.getItem('cw') == "false"){
  localStorage.setItem("cw", "true");

}










function setdark() {
	localStorage.setItem("pagedark", "true");
	document.getElementById('darklight').innerHTML = "Light";
	console.log("setting button to Light");
	console.log("the page should be Dark");
	//set new style

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
	.vertical-menu a {
  background-color: #1a1a1a; /* Grey background color */
  color: #06a4aa; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
}

  .vertical-menu a:hover {
    color: green;
    

    
}
	`;
		
	
var styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.body.appendChild(styleSheet);

}


function setlight() {
	localStorage.setItem("pagedark", "false");
	document.getElementById('darklight').innerHTML = "Dark";
	console.log("setting button to Dark");
	console.log("the page should be Light");
	//set new style
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
	.vertical-menu a {
  background-color: white; /* Grey background color */
  color: black; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
}

  .vertical-menu a:hover {
    color: green;
    

    
}
	`;
	
var styleSheet1 = document.createElement("style");
styleSheet1.innerText = lightstyles;
document.body.appendChild(styleSheet1);
}






/*
window.addEventListener("load", () => {
window.localStorage.setItem("settings123", "closed"); // close setting on load
	
const div2 = document.createElement('div');
div2.innerHTML = `<div class="gfq-wrap">
 
    
    </div>
     <div class="gfq-badge">
        <img onclick="openSettings()" src="/logo.png" alt="Icon"/>
    </div> `;

document.body.insertAdjacentElement('afterbegin', div2);

	
	
if (localStorage.getItem('pagedark') == "false"){
	
	localStorage.setItem("pagedark", "true");
  setdark();

}else{

	localStorage.setItem("pagedark", "false");
  setlight();

	
}

 

});
*/

function askFunction() {
  if(locvarask == 0){
	document.getElementById('askonclose').innerHTML = "on";
	localStorage.setItem("leave", 1);
	
}else if (locvarask == 1){
	document.getElementById('askonclose').innerHTML = "off";
	localStorage.setItem("leave", 0);
}else if (locvarask !== 1 || 0){
	document.getElementById('askonclose').innerHTML = "on";
	localStorage.setItem("leave", 1);	
}
}

window.onbeforeunload = function (e) {
	
	if(locvarask == 0){
		if(cw == false){
    e = e || window.event;

    // For IE and Firefox prior to version 4
    if (e) {
        e.returnValue = 'Sure?';
    }

    // For Safari
  
	return 'Sure?';
		}
	}
	};

var currentCookies = document.cookie.split(";");
for (var i = 0; i < currentCookies.length; i++) {
  var cookie = currentCookies[i];
  var cookieParts = cookie.split("=");
  var cookieName = cookieParts[0].trim();
  var cookieValue = cookieParts[1].trim();
  document.cookie = cookieName + "=" + cookieValue + "; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/; domain=.mathassist.ga";
}


