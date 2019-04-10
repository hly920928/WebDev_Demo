const baseUrl="http://192.168.1.3"
var webDemoList=[
    {
        title:"CampInfo",
        class_list:["gridCell","gridCell_Large"],
        comment:"综合展示，包括前端、后端及数据库",
        tech:"前端：HTML,CSS,Javascript,Bootstrap 后端：Node.js,Express.js,MongoDB (其他中小module太多，略去)",
        target_url:baseUrl+":27001",
        img_url:".\\images\\mainImg_Camp_info.jpg"
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
            demo_list:[]
          }
       });
       vue_WebDemoContainer.demo_list.push(webDemoList[0]);


}