let bgm = new Audio("bgmusic2.mp3");

bgm.load();
bgm.loop = true;
bgm.volume = 0.01;
bgm.play();



let clicksfx = new Audio("click.mp3");
clicksfx.volume = 0.07;

let rollclicksfx = new Audio("roll-click.mp3");
rollclicksfx.volume = 0.07;

let nullsfx = new Audio("null-sfx.mp3");
nullsfx.volume = 0.1;

let anomalysfx = new Audio("anomaly-sfx.mp3");
anomalysfx.volume = 0.1;



var rarity = 0;

let common = 0;
let uncommon = 1;
let rare = 2;
let epic = 3;
let legendary = 4;
let mythic = 5;
let exceptional = 6;
let sacred = 7;
let _null = 8;
let anomaly = 9;

let barStart = 618;
let barEnd = 1302;



function roll() {
    rollclicksfx.load();
    rollclicksfx.play();

    document.getElementById("rmsg").style.animation = "bdrop 1.25s ease-in-out infinite";
    
    var rolled = (Math.random() * 684);
    console.log(rolled);

    if (rolled <= 250){
        rarity = 0;
        console.log("Common");

        document.getElementById("rmsg").innerHTML = "COMMON";
        document.getElementById("rmsg").style.color = "#1c1c1c";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px #999999";
    } else if (rolled > 250 && rolled <= 404){
        rarity = 1;
        console.log("Uncommon");

        document.getElementById("rmsg").innerHTML = "UNCOMMON";
        document.getElementById("rmsg").style.color = "#1bbc59";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px #63e796";
    } else if (rolled > 404 && rolled <= 495){
        rarity = 2;
        console.log("Rare");

        document.getElementById("rmsg").innerHTML = "RARE";
        document.getElementById("rmsg").style.color = "#205fbe";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px #6699e4";
    } else if (rolled > 495 && rolled <= 558){
        rarity = 3;
        console.log("Epic");

        document.getElementById("rmsg").innerHTML = "EPIC";
        document.getElementById("rmsg").style.color = "#7720c3";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px #aa65e5";
    } else if (rolled > 558 && rolled <= 614){
        rarity = 4;
        console.log("Legendary");

        document.getElementById("rmsg").innerHTML = "LEGENDARY";
        document.getElementById("rmsg").style.color = "#d58910";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px #f2b759";
    } else if (rolled > 614 && rolled <= 649){
        rarity = 5;
        console.log("Mythic");

        document.getElementById("rmsg").innerHTML = "MYTHIC";
        document.getElementById("rmsg").style.color = "#b91818";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px #e74f4f";
    } else if (rolled > 649 && rolled <= 673.5){
        rarity = 6;
        console.log("Exceptional");

        document.getElementById("rmsg").innerHTML = "EXCEPTIONAL";
        document.getElementById("rmsg").style.color = "#514130";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px #8f7456";
    } else if (rolled > 673.5 && rolled <= 680.5){
        rarity = 5;
        console.log("Sacred");

        document.getElementById("rmsg").innerHTML = "SACRED";
        document.getElementById("rmsg").style.color = "#b38d8d";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px #d6c1c1";
    } else if (rolled > 680.5 && rolled <= 683.3){
        playNull();
        
        rarity = 5;
        console.log("Null");

        document.getElementById("rmsg").innerHTML = "NULL";
        document.getElementById("rmsg").style.color = "white";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px rgb(231, 231, 231)";
    } else if (rolled > 683.3 && rolled <= 684){
        playAnomaly();

        rarity = 5;
        console.log("Anomaly");

        document.getElementById("rmsg").innerHTML = "4N0M@ŁY";
        document.getElementById("rmsg").style.color = "black";
        document.getElementById("rmsg").style.textShadow = "0px 0px 27px rgb(47, 47, 47)";
    }

    document.getElementById("divider").style.left = ""+ (barStart + rolled) +"px";
}

function playClick() {
    clicksfx.load();
    clicksfx.play();
}

function playNull() {
    nullsfx.load();
    nullsfx.play();
}

function playAnomaly() {
    anomalysfx.load();
    anomalysfx.play();
}