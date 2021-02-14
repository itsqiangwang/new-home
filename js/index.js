//total number of 'span' (caption) tags
let captionsTotal = document.getElementsByTagName('span').length;

//randomly choose a number from [min + 1, max + 1]
let captionsChosenNumber = Math.floor(Math.random() * captionsTotal);

//display a randomly chosen 'span' tag
let captionsSelected = document.getElementsByTagName('span')[captionsChosenNumber];
captionsSelected.style.opacity = "1";
captionsSelected.style.display = "inline";
captionsSelected.style.backgroundColor = "white";

//display a randomly chosen 'span' tag on click of the 'new' button
let newBtn = document.getElementById('new');
newBtn.onclick = function(){
    captionsTotal = document.getElementsByTagName('span').length;
    for (i = 0; i<captionsTotal; i++){
        captionsSelected = document.getElementsByTagName('span')[i];
        captionsSelected.style.display = "none";
    }
    captionsChosenNumber = Math.floor(Math.random() * captionsTotal);
    captionsSelected = document.getElementsByTagName('span')[captionsChosenNumber];
    captionsSelected.style.opacity = "1";
    captionsSelected.style.display = "inline";
    captionsSelected.style.backgroundColor = "white";
}

//display all 'span' tags on click of the 'home' button
let homeBtn = document.getElementById('home');
homeBtn.onclick = function(){
    captionsTotal = document.getElementsByTagName('span').length;
    for (i = 0; i<captionsTotal; i++){
        captionsSelected = document.getElementsByTagName('span')[i];
        captionsSelected.style.backgroundColor = "transparent";
        captionsSelected.style.display = "inline";
    }
}

// background color alpha and background opacity change with time on the hour
let background = document.getElementsByTagName('html')[0];
let nav = document.getElementsByTagName('nav')[0];
let main = document.getElementsByTagName('main')[0];
let section = document.getElementsByTagName('main')[0];

function opaVal(){
    let d = new Date();
    let backgroundOpa = 1 - d.getHours() / 24;
    nav.style.opacity = backgroundOpa;
    main.style.opacity = backgroundOpa;
}

function alphaVal(){
    let d = new Date();
    let backgroundAlpha = d.getHours() / 24;
    background.style.backgroundColor = 'rgba(0,0,0,' + backgroundAlpha + ')';
}
setInterval(opaVal, 1);
setInterval(alphaVal, 1);

//roach size / amount
let roach = document.getElementsByClassName('roach');
function roachDensity(){
    let d = new Date();
    let roachAmount = d.getHours();
    let roachSize = d.getHours() / 240;
    for (let i=0; i<roach.length; i++){
        roach[i].style.transform = 'scale(' + roachSize + ')';
    }
    for (let i=0; i<roachAmount; i++){
        roach[i].style.display = "block";
    }
}
setInterval(roachDensity, 1);


function mouseOver() {
    document.getElementById("roach-container").style.opacity = "0";
    document.getElementById("mode-switch").style.display = "none";
}
  
function mouseOut() {
    document.getElementById("roach-container").style.opacity = "1";
    document.getElementById("mode-switch").style.display = "block";
}

for(let i = 0; i < captionsTotal; i++){
    document.getElementsByTagName("span")[i].onmouseover = function(){
        mouseOver()
    };
    document.getElementsByTagName("span")[i].onmouseout = function(){
        mouseOut()
    };
}

console.log('captionsTotal: ' + captionsTotal);
console.log('captionsChosenNumber: ' + captionsChosenNumber);
console.log('backgroundOpa (second / 60): ' + backgroundOpa);