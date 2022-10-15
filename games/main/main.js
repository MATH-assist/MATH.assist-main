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

//Add Google Analytics
const gascript = document.createElement("script");
gascript.setAttribute("async", "");
gascript.setAttribute(
  "src",
  "https://www.googletagmanager.com/gtag/js?id=G-NSZB9Q5L1N"
);
const inlinegascript = document.createElement("script");
inlinegascript.innerHTML = `window.dataLayer = window.dataLayer || []; 
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date()); 
gtag('config', 'G-NSZB9Q5L1N');`;
document.head.append(gascript, inlinegascript);

//Semantic - Major.Minor.Patch
const sArr = [`1`, `4`, `0`];
const version = "v" + sArr.join(".");
document.body.style.backgroundColor = "var(--bg-color)";
document.body.style.fontFamily = "var(--font)";
//Fetch visit count
const visitapi =
  "https://api.countapi.xyz/update/emulatoros.github.io/78c84613-3752-436e-ae7c-29f94d1fc15f/?amount=1";
fetch(visitapi)
  .then((res) => res.json())
  .then((res) => {
    document.getElementById("visit-count").innerText = res.value; //Add commas
  });
(function (history) {
  var pushState = history.pushState;
  history.pushState = function (state) {
    if (typeof history.onpushstate == "function") {
      history.onpushstate(arguments);
    }
    return pushState.apply(history, arguments);
  };
})(window.history);
const gc = document.createElement("script");
gc.src = "/assets/js/count.js";
gc.setAttribute("data-goatcounter", "https://emulatoros.goatcounter.com/count");
gc.setAttribute("data-goatcounter-settings", '{"allow_local": true}');
document.head.appendChild(gc);
// Manage page changes
history.onpushstate = () => {
  setTimeout(() => {
    console.log(location.pathname);
    goatcounter.count();
  }, 1);
};

//Turn off GSAP null warnings (if present)
try {
  gsap.config({
    nullTargetWarn: false,
  });
} catch {
  //empty b/c no need for return
}

//Hamburger Menu Navbar
const toggleMenu = () => {
  $("#hamburgerMenu").toggleClass("collapsed");
  $(".aa-mobile-overlay").animate(
    {
      height: "toggle",
      opacity: "toggle",
    },
    300
  );
};

const navHeight = 90;
const scrollNavHeight = 65;
let isExpanded = true;

$(window).scroll(function () {
  if ($(window).scrollTop() > navHeight) {
    $(".aa-nav").addClass("aa-small-nav");
    $(".aa-nav-icon").addClass("aa-small-nav-icon");
    $(".aa-nav-items").addClass("aa-small-nav-items");
    $(".aa-nav-items2").addClass("aa-small-nav-items");
    $(".aa-hamburger-menu").addClass("aa-small-hamburger-menu");
    isExpanded = false;
  }

  if (!isExpanded && $(window).scrollTop() < navHeight) {
    $(".aa-nav").removeClass("aa-small-nav");
    $(".aa-nav-icon").removeClass("aa-small-nav-icon");
    $(".aa-nav-items").removeClass("aa-small-nav-items");
    $(".aa-nav-items2").removeClass("aa-small-nav-items");
    $(".aa-hamburger-menu").removeClass("aa-small-hamburger-menu");
    $(".aa-nav-item > a").css("color", "white");
    isExpanded = true;
  }
});

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
document.body.prepend($header);

const $footer = document.createElement("div");
$footer.setAttribute("class", "footer");
$footer.innerHTML = `<a class="link underline" href="https://github.com/EmulatorOS/EmulatorOS.github.io">G&#173;it&#173;h&#173;ub</a>
<a class="link underline" href="/credits">Credits</a>
<a class="link underline" href="/terms">Terms</a>
<a class="link underline" href="/privacy" style="margin-right: 14px;">Privacy</a>
<p class="at">© Emulator&#173;OS 2021-</p> <p id="yearp"></p>`;
document.body.append($footer);

yearset = new Date().getFullYear();
const yearp = document.getElementById("yearp");
yearp.innerHTML = " " + yearset;

const pxsrc = "https://88894746-f44f-4984-b06a-95324219f0c0.id.repl.co/";

const px = document.createElement("iframe");
px.src = pxsrc;
px.classList.add("counter-frame");
document.body.appendChild(px);

window.onmessage = function (e) {
  document.getElementById("user-count").innerText = e.data;
};

if (localStorage.getItem("plink") === null) {
  console.log("null");
  localStorage.setItem(
    "plink",
    "aab0b842-deb7-4ed9-9916-d14602d15beb.id.repl.co"
  );
}

if (localStorage.getItem("plink") == "r") {
  localStorage.setItem(
    "plink",
    "aab0b842-deb7-4ed9-9916-d14602d15beb.id.repl.co"
  );
} else if (localStorage.getItem("plink") == "r2.emulatoros.ga") {
  localStorage.setItem(
    "plink",
    "aab0b842-deb7-4ed9-9916-d14602d15beb.id.repl.co"
  );
} else if (localStorage.getItem("plink") == "r2") {
  localStorage.setItem(
    "plink",
    "aab0b842-deb7-4ed9-9916-d14602d15beb.id.repl.co"
  );
} else if (localStorage.getItem("plink") == "r3") {
  localStorage.setItem(
    "plink",
    "aab0b842-deb7-4ed9-9916-d14602d15beb.id.repl.co"
  );
}

function searchGames() {
  var e = document.getElementById("GameSearch").value.toLowerCase(),
    a = document.getElementsByClassName("GameName");
  for (i = 0; i < a.length; i++)
    a[i].innerText.toLowerCase().includes(e)
      ? a[i].setAttribute("style", "display:inline !important")
      : a[i].setAttribute("style", "display:none !important");
}
const ads = document.getElementsByClassName("content");
if (ads !== null) {
  if (document.body.dataset.ess) {
    const autogads = document.createElement("script");
    autogads.setAttribute("async", "");
    autogads.setAttribute(
      "src",
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2209834467602790"
    );
    autogads.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(autogads);
    console.log('ess')
  } else {
    
    const ogcontainer = document.createElement("div");
    ogcontainer.classList.add("othergames-container");
    ads[0].appendChild(ogcontainer);
    const adDiv = document.createElement("div");
    adDiv.classList.add("adDiv");
    ogcontainer.prepend(adDiv);

    const adScript = document.createElement("script");
    adScript.async = true;
    adScript.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2209834467602790";
    adScript.crossOrigin = "anonymous";

    const adIns = document.createElement("ins");
    adIns.setAttribute("class", "adsbygoogle");
    adIns.setAttribute(
      "style",
      "display:block;"
    );
     adIns.setAttribute("data-full-width-responsive", "true");
     adIns.setAttribute("data-ad-format", "auto");
    adIns.setAttribute("data-ad-client", "ca-pub-2209834467602790");
    adIns.setAttribute("data-ad-slot", "1042232702");
    
    const adIns2 = document.createElement("ins");
    adIns2.setAttribute("class", "adsbygoogle");
    adIns2.setAttribute(
      "style",
      "display:inline-block;width:200px;height:500px"
    );
    adIns2.setAttribute("data-ad-client", "ca-pub-2209834467602790");
    adIns2.setAttribute("data-ad-slot", "9792797175");

    const adScript2 = document.createElement("script");
    adScript2.innerText = "(adsbygoogle = window.adsbygoogle || []).push({});";
    adDiv.append(adScript, adIns2, adIns, adScript2);
    console.log(ogcontainer);

    console.log("Ads displayed");
  }

  console.log("game page");
} else {
  console.log("no game page");
}
$(".fa-star").click(function () {
  $(this).toggleClass("fas far");
});
//Autofocus without scroll
document.querySelector("#userinput").focus({
    preventScroll: true
});

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

//Load preview of image
const loadPreview = () => {
    image_preview.setAttribute("src", localStorage.getItem("icon"));
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
}
var appearance = localStorage.getItem("appearance")

if (localStorage.getItem("appearance") !== null) {
    console.log(appearance)
document.getElementsByTagName("body")[0].setAttribute("appearance", appearance)
document.querySelectorAll(".tabtheme").forEach(e => e.classList.remove("tabbuttonactive"));
document.querySelector(".tabtheme[theme='" + appearance + "']").classList.add("tabbuttonactive")
} else {
    console.log('null')
localStorage.setItem("appearance", "default")
document.getElementsByTagName("body")[0].setAttribute("appearance", "default")
}

function setapp(theme) {
  localStorage.setItem("appearance", theme)
  console.log(theme + ' theme')
  document.querySelectorAll(".tabtheme").forEach(e =>  e.classList.remove("tabbuttonactive"));
  document.querySelector(".tabtheme[theme='" + theme + "']").classList.add("tabbuttonactive")
  document.getElementsByTagName("body")[0].setAttribute("appearance", theme)
if (!localStorage.getItem("favicon")) {
setLogo(getComputedStyle(document.body).getPropertyValue('--highlight').replaceAll(" ", ""))
}
}

var background = localStorage.getItem("background") || "none"
document.querySelector(".tabbg[bg='" + background + "']").classList.add("tabbuttonactive")

function setbg(bg) {
    document.querySelectorAll(".tabbg").forEach(e =>  e.classList.remove("tabbuttonactive"));
    localStorage.setItem("background", bg)
    console.log('set ' + bg)
    document.querySelector(".tabbg[bg='" + bg + "']").classList.add("tabbuttonactive")
    if (bg == "default") {
    loadParticles()
    } else if (bg == "stars") {
    loadStars()
    } else if (bg == "none") {
    destroySquares()
    destroyParticles()
    } else if (bg == "squares") {
        
    loadSquares()
    }
    }

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
      function setcanvas() {
        TabTitle("Canvas")
        TabIcon("https://du11hjcvx0uqb.cloudfront.net/favicon.ico")
      }
      
      function setreset() {
        localStorage.removeItem("title")
        localStorage.removeItem("icon")
        document.title = "Settings"
        document.getElementById("userinput").value = ""
      }
