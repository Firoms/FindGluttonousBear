
const bg = document.getElementById("bg");
const menuBtns = document.getElementsByClassName("menuBtn");


function removeMenu(){
    for (let i = 0; i < menuBtns.length; i++){
        menuBtns[i].style.display = "none"
    }
}




function showGame(){
    bg.style.backgroundImage = "url(./game_bg.png)";
    removeMenu();
}

function showHow(){
    bg.style.backgroundImage = "url(./intro_bg.jpg)";
    removeMenu()
}


function showRank(){
    bg.style.backgroundImage = "url(./rank_bg.jpg)";
    removeMenu()
}