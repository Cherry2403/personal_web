var boardMain;
var boardChar;
var boardMain_width;
var boardMain_height;
var boardChar_width;
var boardChar_height;

//value for x,y coor of mainBoard
var context;
var topLeft;
var topRight;
var bottomLeft;
var bottomRight;
var rect1;

//for char
var normalImg;

var char = {
    img: null,
    x: 100,
    y: 100,
    width: 80,
    height: 0
}

//for platform
var platformArray = [];
var platformImg = ['./art/intro.png', './art/skills.png', './art/experience.png', './art/education.png', './art/coursework.png'];
var platDist = 110;
var imagesLoaded = 0;

function setUp() {
    boardSizes();
    charSetUp();
    platformSetUp();
}

function boardSizes() {
    boardMain = document.getElementById('boardMain');
    boardChar = document.getElementById('boardChar');

    if (window.innerWidth >= 850) {
        boardChar.width = 100;
        boardChar.height = 650;
        boardMain.width = 650;
        boardMain.height = 650;
        boardMain.style.marginRight = 280 + 'px';
        boardMain.style.marginLeft = 'auto';
        boardChar.style.marginLeft = window.innerWidth / 15 + 'px';
    } else if (window.innerWidth < 849) {
        boardChar.height = 100;
        boardChar.width = 550;
        boardMain.width = 550;
        boardMain.height = 650;
        boardMain.style.marginLeft = 'auto';
        boardMain.style.marginRight = 'auto';
        boardChar.style.marginLeft = 'auto';
        boardChar.style.marginRight = 'auto';
    }

    context = boardMain.getContext('2d');

    boardChar_width = boardChar.width;
    boardChar_height = boardChar.height;
    boardMain_width = boardMain.width;
    boardMain_height = boardMain.height;
}

//find x,y of 4 corners, place char
function charSetUp() {
    rect1 = boardMain.getBoundingClientRect();
    topLeft = { x: rect1.left + window.scrollX, y: rect1.top + window.scrollY };
    topRight = { x: rect1.right + window.scrollX, y: rect1.top + window.scrollY };
    bottomLeft = { x: rect1.left + window.scrollX, y: rect1.bottom + window.scrollY };
    bottomRight = { x: rect1.right + window.scrollX, y: rect1.bottom + window.scrollY };

    normalImg = new Image();
    normalImg.src = "./art/bia/jump.png";
    char.img = normalImg;
    char.x = (topRight.x - topLeft.x) / 2 - char.width / 2;
    char.y = (bottomLeft.y - topLeft.y) / 2 - char.height / 2 + 150;
    if (window.innerWidth < 540) {
        char.x = window.innerWidth / 2 - char.width / 2;
    }
    
    normalImg.onload = function () {
        char.height = (normalImg.naturalHeight / normalImg.naturalWidth) * char.width;
        imagesLoaded++;
        // Check if all images are loaded
        checkAllImagesLoaded();
    }
}

function platformSetUp() {
    platformArray = [];
    imagesLoaded = 1; // Reset imagesLoaded to account for the character image

    for (let i = 0; i < platformImg.length; i++) {
        let platformImgElement = new Image();
        platformImgElement.src = platformImg[i];
        
        let platform = {
            img: platformImgElement,
            x: 0,
            y: 0,
            width: 130,
            height: 30
        };
        
        platformImgElement.onload = function () {
            imagesLoaded++;
            // Check if all images are loaded
            checkAllImagesLoaded();
        }
        
        platformArray.push(platform);
    }

    platformArray[0].x = char.x;
    platformArray[0].y =  580;
    platformArray[0].width = 100;
    platformArray[0].height = 30;

    for (let i = 1; i < platformArray.length; i++) {
        if (i % 2 == 0) {
            platformArray[i].x = 50;
            platformArray[i].y = 650 - i * platDist;
        } else {
            platformArray[i].x = 380;
            platformArray[i].y = 450 - i * platDist;
        }

        if (boardMain.width > 560 && i % 2 == 1) {
            platformArray[i].x = 470;
        }

        if (window.innerWidth < 550) {
            // Adjust positions for smaller screens if necessary
            platformArray[i].width=75;
            platformArray[i].height = 23;
            if (i%2==1)
            {
                platformArray[i].x = window.innerWidth*2/3;
            }
        }
    }
}

function checkAllImagesLoaded() {
    if (imagesLoaded === platformImg.length + 1) { // +1 for the character image
        drawAllImages();
    }
}

function drawAllImages() {
    context.clearRect(0, 0, boardMain.width, boardMain.height);

    // Draw character
    context.drawImage(char.img, char.x, char.y, char.width, char.height);

    // Draw platforms
    for (let i = 0; i < platformArray.length; i++) {
        context.drawImage(platformArray[i].img, platformArray[i].x, platformArray[i].y, platformArray[i].width, platformArray[i].height);
    }
}

//reload everytime got change in window size
window.addEventListener('resize', setUp);
document.addEventListener('DOMContentLoaded', setUp);

