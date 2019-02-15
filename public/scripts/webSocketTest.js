var ws;
var url;
var reData;
var addr;
var mesg;
window.onload=function init(){
    document.getElementById("BTN").addEventListener("click",connectAndSend);
    reData=  document.getElementById("receiveData").childNodes[0];
}
function sendMsg(mesg){
    ws.send(mesg);
    console.log(mesg+" send");
}
function connectAndSend(){
     addr=document.getElementById("Address").value;
     mesg=document.getElementById("Message").value;
    if ("WebSocket" in window)
            {
               console.log("WebSocket OK!");
               
              if(addr!=url){
                url=addr;
                ws = new WebSocket("ws://"+url);
                ws.onopen = function()
                {
                    sendMsg(mesg);
                };
                 
                ws.onmessage = function (evt) 
                { 
                   var received_msg = evt.data;
                   reData.data=received_msg;
                };
                 
                ws.onclose = function()
                { 
                   console.log(url+" closed");
                   url=""; 
                };
                ws.onerror = function(event) {
                 console.error("WebSocket error observed:", event);
               };
             
              }else{
                sendMsg(mesg);
              }
                
              
            }
            
            else
            {
                console.log("WebSocket not supported!");
            }
}
setInterval(function ping() {
    ws.send("Live!");}, 30000);