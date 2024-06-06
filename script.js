let boardMain;
let boardChar;
let boardMain_width;
let boardMain_height;
let boardChar_width;
let boardChar_height;

/*let charHeight = 50;
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

    if(window.innerWidth >=1000)
    {
        boardChar.width=100;
        boardChar.height=550;
        boardMain.width=650;
        boardMain.height=550;
        /*boardMain.style.marginRight= (window.innerWidth - 300)/2 + 'px';*/
        
        boardMain.style.marginRight= 280+'px';
        boardMain.style.marginLeft = auto;
        boardChar.style.marginLeft = window.innerWidth/15+'px';
    }

    if(window.innerWidth >=900 && window.innerWidth <=999)
    {
        boardChar.width=100;
        boardChar.height=550;
        boardMain.width=600;
        boardMain.height=550;
        /*boardMain.style.marginRight= (window.innerWidth - 300)/2 + 'px';*/
        boardMain.style.marginRight = 200+'px';
        boardMain.style.marginLeft = auto;
        boardChar.style.marginLeft = window.innerWidth/15+'px';
    }
    else if(window.innerWidth >=700 &&window.innerWidth <=899)
    {
        boardChar.width=100;
        boardChar.height=550;
        boardMain.width=550;
        boardMain.height=550;
        boardMain.style.marginLeft = 'auto';
        boardMain.style.marginRight = 'auto';
        boardChar.style.marginLeft = 'auto';
        boardChar.style.marginRight = 'auto';

        
        
    }
    else if(window.innerWidth <699)
    {
        boardChar.height=100;
        boardChar.width=550;
        boardMain.width=550;
        boardMain.height=550;
        boardMain.style.marginLeft = 'auto';
        boardMain.style.marginRight = 'auto';
        boardChar.style.marginLeft = 'auto';
        boardChar.style.marginRight = 'auto';
    }
    
    
}

window.addEventListener('resize', boardSizes);
document.addEventListener('DOMContentLoaded', boardSizes);
boardChar_width=boardChar.width;
boardChar_height= boardChar.height;
boardMain_width= boardMain.width;
boardMain_height= boardMain.height;
