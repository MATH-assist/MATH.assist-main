var currentTitle = localStorage.getItem('storedtitle');
var currentIcon = localStorage.getItem('icon');

document.title = currentTitle;
//document.head.querySelector("link[rel=icon]").href = currentIcon;

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
        document.head.querySelector("link[rel=icon]").href = newfavicon.value;
        window.localStorage.setItem("icon", newfavicon.value);
        
        
        alert("Icon change successful");
    } else {
        
        alert("Icon change failed. Make sure you are using a valid URL");
    }
    newfavicon.value = ""; //clear input
};

//Clears Tab Icon and Title
const resetTabSettings = () => {
    window.localStorage.setItem("storedtitle", "LEGEND");//set default site name
    window.location.reload();
};
/*
//URL Validation Regex
const validURL = (str) => {
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var regex = new RegExp(expression);
    return !!regex.test(str);
}
*/
