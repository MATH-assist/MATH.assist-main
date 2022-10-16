const newTitle = localStorage.getItem('storedtitle');
document.title = newTitle;


const changeTabTitle = () => {
    const newtitle = document.getElementById("userinput");
    if (newtitle.value == ""){ //check if the input is blank when they submit
        window.localStorage.removeItem("storedtitle");
        window.document.title = "LEGEND"
        alert("No title entered. Default applied");
    } else {
        window.localStorage.setItem("storedtitle", newtitle.value);
        window.document.title = newtitle.value; //Set window's title to userinput
        alert("Title change successful");
    }
    newtitle.value = ""; //clear input
};



//if (localStorage.getItem('storedtitle') == ""){
// console.log(no stored title)   
//}else{
//document.title = newTitle;
//}
