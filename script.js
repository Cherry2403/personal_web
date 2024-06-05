let boardMain;
let boardChar;
/*let boardMain_width;
let boardMain_height;
let boardChar_width;
let boardChar_height;

let charHeight = 50;
let charWidth= 40;
let charX= board_width/2;
let charY= board_height/2 + 30;

let char={
    img:null,
    x:charX,
    y:charY,
    width: charWidth,
    height: charHeight
}

/*window.onload=function()
{
    boardSizes();
    window.addEventListener('resize', boardSizes);
}*/



function boardSizes()
{
    boardMain= document.getElementById('boardMain');
    boardChar= document.getElementById('boardChar');

    /*boardMain_width= boardMain.width;
    boardMain_height= boardMain.height;*/

    if(window.innerWidth >=600)
    {
        boardChar.width=150;
        boardChar.height=450;
    }
    else
    {
        boardChar.height=100;
        boardChar.width=450;
    }
}

window.addEventListener('resize', boardSizes);
document.addEventListener('DOMContentLoaded', boardSizes);
