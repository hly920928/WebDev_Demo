var PORT;var HOST;

if(process.env.COMPUTERNAME=="HLY2-PC"){
  PORT=44564;HOST = "192.168.1.5";
}else if (process.env.PWD== '/root/AlC_NodeWebDev/docs') {
    PORT = 27002 ; HOST= "0.0.0.0";
}else{
  PORT = process.env.PORT;HOST = process.env.IP;
}
const express=require("express");
const app=express();
app.use(express.static(__dirname));//__dirname:dir of this .js file

app.listen(PORT,HOST,function(){
    console.log("server start "+HOST+":"+PORT);
  });
app.get("/",function(req,res){res.sendFile("index.html")});