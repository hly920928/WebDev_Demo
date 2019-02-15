var allsquare;
var goalColor;
var status_1;
var goalSquareId;
var bg_color="rgb(127, 127, 127)";
var btn_rn;
var btn_e;
var btn_h;
var EH_mode;
var  backgroundColor="rgb(127, 127, 127)";
window.onload=function(){
    allsquare=document.querySelectorAll(".square");
    btn_rn=document.querySelector("#btn_rn");
    status_1=document.querySelector("#status_1");
    btn_rn.addEventListener("click",setAllRandomColor);
     btn_e=document.querySelector("#btn_Easy");
    btn_e.addEventListener("click",setModeEasy);
     btn_h=document.querySelector("#btn_Hard");
    btn_h.addEventListener("click",setModeHard);
    setAllRandomColor("H");
    EH_mode="H";
    // var h1=document.querySelector("h1");
    // h1.style.backgroundColor=goalColor;
}
function setModeEasy(){
    EH_mode="E";
    setAllRandomColor();
}
function setModeHard(){
    EH_mode="H";
    setAllRandomColor();
}
function setAllRandomColor(){
 
    if(EH_mode==="E"){
        btn_h.classList.remove("selectMode");
        btn_e.classList.add("selectMode");
    }else{
        btn_e.classList.remove("selectMode");
        btn_h.classList.add("selectMode");
    }
    for(var i=0;i<6;i++){
        allsquare[i].style.display="block";
    }
    status_1.textContent="TRY";
    var Main_1=document.querySelector("#Main_1");
    Main_1.style.backgroundColor="SteelBlue";
    btn_rn.textContent="New Color";
    squareRandomColor();
    goalColor=RandomColorRGB();
    if(EH_mode==="E"){
        goalSquareId=Math.floor((Math.random()*3));
    }else{
        goalSquareId=Math.floor((Math.random()*6));
    }
    
    allsquare[goalSquareId].style.backgroundColor=RGBtoHex(goalColor);
    for(var i=0;i<6;i++){
        allsquare[i].addEventListener("click", clickAndCompare);
    }

    if(EH_mode==="E"){
        for(var i=3;i<6;i++){
            allsquare[i].style.display="none";
        }
    }
   var  rgbId=document.querySelector("#rgb");
   rgbId.textContent="RGB"+"("+
                              goalColor.r+", "+
                              goalColor.g+", "+
                              goalColor.b+")";
}
function  clickAndCompare(){
    var thisColor=this.style.backgroundColor;
    var goal="rgb("+goalColor.r+", "+goalColor.g+", "+goalColor.b+")";
    if(thisColor===goal){
      
        ChangeAllColor()
    }else{
        this.style.backgroundColor=bg_color;
        status_1.textContent="Try Again";
    }
}
function  RandomColorRGB(){
    var color={
        r:66,
        g:66,
        b:66
    }
    color.r=Math.floor((Math.random()*256));
    color.g=Math.floor((Math.random()*256));
    color.b=Math.floor((Math.random()*256));
    return color;
}
function  RGBtoHex( rgb)
{
    var color="#";
    var array=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
   var r=rgb.r; var g=rgb.g;var b=rgb.b;
    color=color+array[Math.floor(r/16)%16]+array[r%16];
    color=color+array[Math.floor(g/16)%16]+array[g%16];
    color=color+array[Math.floor(b/16)%16]+array[b%16];
    return color;
}

function  RandomColorHex(){
    var color="#";
    var array=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    for(var i=0;i<6;i++){
        var id=Math.floor((Math.random()*16));
        color=color+array[id];
    }
    return color;
}

function squareRandomColor(){
    for(var i=0;i<allsquare.length;i++){
        allsquare[i].style.backgroundColor=RandomColorHex();
    }
}
function ChangeAllColor(){
    status_1.textContent="Correct";
    for(var i=0;i<allsquare.length;i++){
        allsquare[i].style.backgroundColor=RGBtoHex(goalColor);
    }
    var Main_1=document.querySelector("#Main_1");
    Main_1.style.backgroundColor=RGBtoHex(goalColor);
    btn_rn.textContent="Play Again?";
}