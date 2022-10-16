const newTitle = localStorage.getItem('storedtitle');

document.title = newTitle;


const changeTabTitle = () => {
    const newtitle = document.getElementById("userinput");
    if (newtitle.value == ""){ //check if the input is blank when they submit
        window.localStorage.removeItem("title");
        window.document.title = "lEGEND"
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
