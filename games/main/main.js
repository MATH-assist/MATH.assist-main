var currentTitle = localStorage.getItem('storedtitle');
var currentIcon = localStorage.getItem('storedicon');


document.title = currentTitle;
window.addEventListener('load', (event) => {
  console.log('page is fully loaded now atempting to restore favicon and add a site name');
     changeFavicon(currentIcon);
  
 if (localStorage.getItem("storedtitle") == null) {
        window.document.title = "LEGEND"
 }else{
    window.document.title = storedtitle
  }
});

const changeTabTitle = () => {
    const newtitle = document.getElementById("userinput");
    if (newtitle.value == ""){ //check if the input is blank when they submit
        window.localStorage.setItem("storedtitle", "LEGEND");//set default site name
        window.document.title = "LEGEND"
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
}
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



window.addEventListener("load", () => {

const div2 = document.createElement('div');
div2.innerHTML = `<div class="gfq-wrap">
    <div id="setpan" class="gfq-panel">
         </div>
  <div class="container">
		<div class="urmom">
			<h4>Almost Site-Wide Tab Cloaker</h4>
			<div class="thebody">
				<p> Enter text below to change the title or an image URL to change the icon</p>
				
				<p class="input"> <input id="userinput" type="text"
						placeholder="Enter a valid title or image URL" autocomplete="off" autofocus=""></p>
				

				<div id="preview-container" class="preview-container"><img id="image-preview"></div>
			</div>
			
		</div>
		<div class="button-wrapper">
			<button onclick="changeTabTitle()" class="button">Set Title</button>
			<button onclick="changeTabIcon()" class="button">Set Icon</button>
			<button onclick="resetTabSettings()" class="button">Reset</button>
			<div class="tabgroup">
    </div>
    <div class="gfq-badge">
        <img onclick="openSettings()" src="/logo.png" alt="Icon"/>
    </div>
</div>
`;

document.body.insertAdjacentElement('afterbegin', div2);

 

});


