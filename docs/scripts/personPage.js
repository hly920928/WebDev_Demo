const baseUrl="http://192.168.1.3"
var webDemoList=[
    {
        title:"Camp Info",
        class_list:["gridCell","gridCell_Large"],
        comment:"综合展示，包括前端、后端及数据库",
        tech:"前端：HTML,CSS,Javascript,Bootstrap 后端：Node.js,Express.js,MongoDB (其他中小module太多，略去)",
        target_url:baseUrl+":27001",
        img_url:".\\images\\mainImg_Camp_info.jpg"
    },
    {
      title:"Color Game",
      class_list:["gridCell","gridCell_Middle"],
      comment:"纯展示，简单交互游戏",
      tech:"HTML,CSS,Javascript,Bootstrap",
      target_url:baseUrl+":27777/htmls/myColorGame.html",
      img_url:".\\images\\ColorGame.jpg"
  }
];
Vue.component("comp_web_demo",{
    template:"#web_demo_camp",
   props:["title","class_list","comment","tech","target_url","img_url"] 
});

window.onload=function(){
       let vue_WebDemoContainer=new Vue({
           el:"#webDemoContainer",
          data:{
            demo_list:[],
           
          }
       });
       let webDev_id=0;
       let intervalID_1=0;
       let addDemoToList=function(){
        if(webDev_id>=webDemoList.length){
          clearTimeout(intervalID_1);
          return;
        }
        vue_WebDemoContainer.demo_list.push(webDemoList[webDev_id]);
        webDev_id++;
        
         
       };
       intervalID_1=setInterval(addDemoToList,200);
     
       let sideBar= document.querySelector(".mySideBar");
  
    document.querySelector("#toggleMenu_1").addEventListener("click",
          function(){
            sideBar.classList.toggle("veryNarrow");
          }
    );

}