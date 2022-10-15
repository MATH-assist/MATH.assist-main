if (localStorage.getItem("appearance") == "neon") {
  var cssElm = document.createElement("link");
  cssElm.setAttribute("href", "/neon.css");
  cssElm.setAttribute("rel", "stylesheet");
  cssElm.setAttribute("id", "neoncss");
  document.head.appendChild(cssElm);

  console.log("neon");
}
if (localStorage.getItem("background") == null) {
  localStorage.setItem("background", "default");
}
if (localStorage.getItem("appearance") !== "neon") {
  if (document.getElementById("neoncss")) {
    const link = document.getElementById("neoncss");
    console.log(link);
    link.remove();

    console.log("remove neon");
  }
}
function setLogo(highlight) {
  document.querySelector("link[rel='icon']").href = "/assets/icon.png";
}
function getLogo(highlight = "#2493ff") {
  console.log("for later update setlogo()");
}
var appearance = localStorage.getItem("appearance");

if (localStorage.hasOwnProperty("appearance")) {
  document
    .getElementsByTagName("body")[0]
    .setAttribute("appearance", appearance);
  setLogo(
    getComputedStyle(document.body)
      .getPropertyValue("--highlight")
      .replaceAll(" ", "")
  );
} else {
  localStorage.setItem("appearance", "default");
  document
    .getElementsByTagName("body")[0]
    .setAttribute("appearance", "default");
}
//Declare variables for cloak here
const local_title = localStorage.getItem("title");
const local_icon = localStorage.getItem("icon");

//If the window already has title stored in localstorage
if (window.localStorage.hasOwnProperty("title")) {
  document.title = local_title;
}
//Fetch and set from user's input
if (window.localStorage.hasOwnProperty("icon")) {
  document.querySelector("link[rel=icon]").href = local_icon;
} else {
  document.querySelector("link[rel=icon]").href = "/assets/icon.png";
}


//Prepend Navbar (using innerHTML because there's no escaped input)
const $header = document.createElement("header");
$header.setAttribute("id", "header");
$header.innerHTML = `<nav class="aa-nav">
<div class="aa-nav-items2">
<span class="aa-nav-item" >
  <div class="users-online"><i class="fas fa-users"></i> <span id="user-count">13</span></div>
</span>
</div>
<div class="aa-nav-items">
  <span class="aa-nav-item"><a href="/home" target="_top">Home</a></span>
  
  <span class="aa-nav-item"><a href="/" target="_top">Games</a></span>
     <span class="aa-nav-item"><a href="/apps" target="_top">Apps</a></span>
  <span class="aa-nav-item"><a href="/settings" target="_top">Settings</a></span>
  </div>
</nav>
<div class="aa-hamburger-menu collapsed" id="hamburgerMenu" onclick="toggleMenu()">
<span class="aa-icon-bar"></span>
<span class="aa-icon-bar"></span>
<span class="aa-icon-bar"></span>
</div>
<div class="aa-mobile-overlay">
<ul class="aa-mobile-nav-items">
  <li><a href="/home" target="_top">Home</a></li>
  <li><a href="/" target="_top">Games</a></li>
  <li><a href="/apps" target="_top">Apps</a></li>
  <li><a href="/settings" target="_top">Settings</a></li>
</ul>
</div>`;

const image_preview = document.getElementById("image-preview");
const console_output = document.getElementById("console-output");

//Change tabTitle
const changeTabTitle = () => {
    const newtitle = document.getElementById("userinput");
    if (newtitle.value == ""){ //check if the input is blank when they submit
        window.localStorage.removeItem("title");
        window.document.title = "Settings"
        document.getElementById("console-output").style.color = "red"; //error = red
        console_output.innerText = "No title entered. Default applied" //return output successful
    } else {
        window.localStorage.setItem("title", newtitle.value);
        window.document.title = newtitle.value; //Set window's title to userinput
        document.getElementById("console-output").style.color = null; //reset output's color to green
        console_output.innerText = "Title change successful" //return output successful
    }
    newtitle.value = ""; //clear input
};
function TabTitle(newtitle)  {
    if (newtitle == ""){ //check if the input is blank when they submit
        console.log(newtitle + ' empty')
        window.localStorage.removeItem("title");
        window.document.title = "Settings"
        document.getElementById("console-output").style.color = "red"; //error = red
        console_output.innerText = "No title entered. Default applied" //return output successful
    } else {
        console.log(newtitle)
        window.localStorage.setItem("title", newtitle);
        window.document.title = newtitle; //Set window's title to userinput
        document.getElementById("console-output").style.color = null; //reset output's color to green
        console_output.innerText = "Title change successful" //return output successful
    }
};

//Change the tabIcon
const changeTabIcon = () => {
    const newfavicon = document.getElementById("userinput");
    if (validURL(newfavicon.value)){
        document.head.querySelector("link[rel=icon]").href = newfavicon.value;
        window.localStorage.setItem("icon", newfavicon.value);
        loadPreview();
        document.getElementById("console-output").style.color = null;
        console_output.innerText = "Icon change successful"
    } else {
        document.getElementById("console-output").style.color = "red";
        console_output.innerText = "Icon change failed. Make sure you are using a valid URL"
    }
    newfavicon.value = ""; //clear input
};
function TabIcon(newfavicon) {
   
    if (validURL(newfavicon)){
        document.head.querySelector("link[rel=icon]").href = newfavicon;
        window.localStorage.setItem("icon", newfavicon);
        loadPreview();
        document.getElementById("console-output").style.color = null;
        console_output.innerText = "Icon change successful"
    } else {
        document.getElementById("console-output").style.color = "red";
        console_output.innerText = "Icon change failed. Make sure you are using a valid URL"
    }
};

//Clears Tab Icon and Title
const resetTabSettings = () => {
    let items = ["icon", "title"];
    items.forEach(item =>
    window.localStorage.removeItem(item));
    window.location.reload();
};

//URL Validation Regex
const validURL = (str) => {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    return !!regex.test(str);

  
  var sel = localStorage.getItem("plink") || "none"
    document.querySelector(".tabp[p='" + sel + "']").classList.add("tabbuttonactive")

    function pselection(link) {
        localStorage.setItem("plink", link);
        console.log(link);
        document.querySelectorAll(".tabp").forEach(e =>  e.classList.remove("tabbuttonactive"));
  document.querySelector(".tabp[p='" + link + "']").classList.add("tabbuttonactive")
      }
      function setgoogle() {
        TabTitle("Google")
        TabIcon("https://www.google.com/favicon.ico")
      }
      
      function setgoogled() {
        TabTitle("Google Drive")
        TabIcon("https://www.drive.google.com/favicon.ico")
      }
      
      function setedpuzzle() {
        TabTitle("Edpuzzle")
        TabIcon("https://edpuzzle.imgix.net/favicons/favicon-32.png")
      }
      
      function setzoom() {
        TabTitle("Zoom")
        TabIcon("https://st1.zoom.us/zoom.ico")
      }
 
      
      function setreset() {
        localStorage.removeItem("title")
        localStorage.removeItem("icon")
        document.title = "Settings"
        document.getElementById("userinput").value = ""
      }
