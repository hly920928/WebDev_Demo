console.log("scriptCanvas_OK")
var canv;
var ctx;
window.onload=function(){
    canv=document.querySelector("#myCan");
    ctx=canv.getContext("2d");
    /*
    canv.addEventListener("mousemove",function(e){
        console.log(e);
        console.log(this);
          //console.log((e.pageX-this.offsetLeft)+" "+(e.pageY-this.offsetTop));
    });
    */
   //$("#doge").hide();
}
function shadowRect(){
    ctx.fillStyle="blue";
ctx.rect(50,50,60,60);
ctx.shadowBlur=10;
ctx.shadowColor="#555555";
ctx.shadowOffsetX=5;
ctx.shadowOffsetY=5;
ctx.fill();
}
function drawLine(){
    ctx.fillStyle="White";
  ctx.beginPath();
  ctx.moveTo(60,60);
  ctx.lineTo(60,80);
  ctx.lineTo(80,90);
  ctx.closePath();
  ctx.fill();
}
function arcLine(){
    ctx.fillStyle="#999999";
   ctx.arc(220,150,50,0,(Math.PI)*2,false);
   ctx.fill();
   ctx.stroke();
  //ctx.closePath();
}
function drawCurve(){
    ctx.fillStyle="#999999";
    ctx.beginPath();
    ctx.moveTo(300,350);
    ctx.bezierCurveTo(300,400,450,400,600,200)
    ctx.stroke();
    ctx.closePath();
  // ctx.fill();

  //ctx.closePath();
}
function Loop(){
    
    ctx.lineWidth=3;
    
    for(var i=0;i<10;i++){
    ctx.beginPath();
    ctx.moveTo(300,350);
    ctx.bezierCurveTo(300,400,450+i*10,400+i*10,600,200)
    ctx.stroke();
    ctx.closePath();
    }
  // ctx.fill();

  //ctx.closePath();
}

function testInterval(x,str){
    setInterval(function(){
    console.log(str);
    },x);
}
function addText(str){
    ctx.fillStyle="Blue";
    ctx.font='50px Arial';
    ctx.fillText(str,50,50,200);
}
function addImg(){
    var img=new Image();
    //img.src="./images/doge.jpg";//Method 1;
    var myImg=$("#doge")[0];
    ctx.drawImage(myImg,0,0);
    // img.onload=function(){
    //     ctx.drawImage(img,0,0);
    // }
    // img.src=myImg.src;//Method 2;
}
function addImgResize(scale){
    var img=new Image();
    //img.src="./images/doge.jpg";//Method 1;
    var myImg=$("#doge")[0];
    ctx.drawImage(myImg,0,0,scale,scale);
    // img.onload=function(){
    //     ctx.drawImage(img,0,0);
    // }
    // img.src=myImg.src;//Method 2;
}
function addImgSlice(){
    var img=new Image();
    //img.src="./images/doge.jpg";//Method 1;
    var myImg=$("#doge")[0];
    ctx.drawImage(myImg,100,100,200,200,0,0,200,200);
    // img.onload=function(){
    //     ctx.drawImage(img,0,0);
    // }
    // img.src=myImg.src;//Method 2;
}
function demo_saveAndRestoreGlobalVariable(){
    ctx.fillStyle="blue";
    ctx.beginPath();
    ctx.arc(50,100,30,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.save();
    ctx.fillStyle="yellow";
    ctx.beginPath();
    ctx.arc(150,100,30,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    ctx.beginPath();
    ctx.arc(250,100,30,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
}
function demo_translate(){
    ctx.fillStyle="blue";
    ctx.beginPath();
    ctx.arc(50,100,30,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.save();
    ctx.translate(0,250);
    ctx.fillStyle="yellow";
    ctx.beginPath();
    ctx.arc(150,100,30,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    ctx.beginPath();
    ctx.arc(250,100,30,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
}
function demo_scale(){
    ctx.fillStyle="blue";
    ctx.beginPath();
    ctx.arc(50,100,30,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.save();
    ctx.scale(1.2,1.2);//Scaling Coordinate System,not elements
    ctx.fillStyle="yellow";
    ctx.beginPath();
    ctx.arc(150,100,30,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();
    ctx.restore();
    ctx.beginPath();
    ctx.arc(250,100,30,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
}
function demo_rotate(){
    ctx.fillStyle="blue";
    ctx.fillRect(50,50,100,100);
    ctx.save();
 
    ctx.fillStyle="yellow";
    ctx.rotate(-Math.PI/6)
    ctx.fillRect(50,50,100,100);

}
function demo_Transform(){
    ctx.fillStyle="blue";
    ctx.fillRect(5,5,10,10);
    ctx.save();
 
    ctx.fillStyle="yellow";
    ctx.setTransform(1,2,3,4,5,6);
    //=matrix 
    /* 
    1,2,3
    4,5,6
    0,0,1
    */
    ctx.fillRect(5,5,10,10);

}
function demo_InteractionAndAnimation(FPS){
    var animationCircle={
        currentPos:[100,100],
        targetPos:[100,100]
    };
   canv.addEventListener("click",(event)=>{
       animationCircle.targetPos[0]=event.offsetX;
       animationCircle.targetPos[1]=event.offsetY;
    });
   var mainDraw=function(){
    var dx=animationCircle["targetPos"][0]-animationCircle["currentPos"][0];
    var dy=animationCircle["targetPos"][1]-animationCircle["currentPos"][1];
     
      animationCircle["currentPos"][0]+=dx/10;
      animationCircle["currentPos"][1]+=dy/10;
     ctx.clearRect(0,0,canv.width,canv.height);
     ctx.fillStyle="blue";
     ctx.beginPath();
     ctx.arc(animationCircle["currentPos"][0],animationCircle["currentPos"][1],30,0,Math.PI*2);
     ctx.fill();
     ctx.closePath();
   }
   setInterval(()=>{
       window.requestAnimationFrame(mainDraw);
   },1000/FPS);
}
function putPixelAt(imageData,x,y,Pixel){
    let width=imageData.width ;
    imageData.data[((x * (width* 4)) + (4 * y)) + 0]=Pixel[0];
    imageData.data[((x * (width* 4)) + (4 * y)) + 1]=Pixel[1];
    imageData.data[((x * (width* 4)) + (4 * y)) + 2]=Pixel[2];
    imageData.data[((x * (width* 4)) + (4 * y)) + 3]=Pixel[3];
}
function Demo_PixelManipulation(){
    let image=ctx.createImageData(150,150);
    for(let x=0;x<150;x++){
        for(let y=0;y<150;y++){
           if(x*x+y*y<=3600){
            putPixelAt(image,x,y, [255,0,0,100]);
           }
           else{
            putPixelAt(image,x,y,[0,0,255,255]);
           }
        }
    }
    ctx.putImageData(image,0,0);
}