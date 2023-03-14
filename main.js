const bg = document.getElementById("bg");
const mainBtns = document.getElementById("mainMenu");
const returnBtn = document.getElementById("return");
const howCont = document.getElementById("how");


function showGame(){
    bg.style.backgroundImage = "url(./game_bg.png)";
    mainBtns.style.display = "none";
    returnBtn.style.display = "flex";
}

function showHow(){
    bg.style.backgroundImage = "url(./intro_bg.jpg)";
    mainBtns.style.display = "none";
    howCont.style.display = "block";
    returnBtn.style.display = "flex";
}

function showRank(){
    bg.style.backgroundImage = "url(./rank_bg.jpg)";
    mainBtns.style.display = "none";
    returnBtn.style.display = "flex";
}


function showMenu(){
    bg.style.backgroundImage = "url(./menu_bg.jpg)";
    mainBtns.style.display = "flex";
    returnBtn.style.display = "none";
    howCont.style.display = "none";
}

