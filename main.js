console.log(document.getElementById("element").classList);

function tinyChange() {
    document.getElementById("element").classList.add("small");
    document.getElementById("element").style.color = "green";
    document.getElementById("element").style.boxShadow = "0px 0px 0px 5px grey";
    document.getElementById("element").style.fontFamily = "Karla";
    document.getElementById("element").style.textShadow = "none";
    document.getElementById("element").style.transitionProperty = "none";
    document.getElementById("element").style.transitionDuration = "none";
}

function middleChange() {
    document.getElementById("element").classList.toggle("small");
    document.getElementById("element").style.color = "green";
    document.getElementById("element").style.boxShadow = "0px 0px 0px 10px grey";
    document.getElementById("element").style.fontFamily = "Karla";
    document.getElementById("element").style.textShadow = "none";

}

function crazyChange() {
    document.getElementById("element").classList.toggle("small");
    document.getElementById("element").style.boxShadow = "0px 0px 0px 20px green";
    document.getElementById("element").style.textShadow = "2px 2px green";
    document.getElementById("element").style.fontFamily = "Notable";
    document.getElementById("element").style.letterSpacing = "3px";
    document.getElementById("element").style.transitionProperty = "color";
    document.getElementById("element").style.transitionDuration = "3s";
    document.getElementById("element").style.color = "gold";
}


