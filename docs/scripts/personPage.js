/* const baseUrl="http://192.168.1.3" */
const baseUrl="http://hly010abc.xyz"
var webDemoList=[
    {
        title:"Camp Info",
        class_list:["gridCell","gridCell_Large","opacityZero"],
        comment:"综合展示，包括前端、后端及数据库",
        tech:"前端：HTML,CSS,Javascript,Bootstrap 后端：Node.js,Express.js,MongoDB (其他中小module太多，略去)",
        target_url:baseUrl+":27001",
        img_url:"./images/mainImg_Camp_info.jpg"
    },
    {
      title:"Color Game",
      class_list:["gridCell","gridCell_Middle","opacityZero"],
      comment:"纯前端展示，简单交互游戏",
      tech:"HTML,CSS,Javascript,Bootstrap",
      target_url:baseUrl+":27777/htmls/myColorGame.html",
      img_url:".\\images\\ColorGame.jpg"
  },
  {
    title:"HTML5 Test Field",
    class_list:["gridCell","gridCell_Small","opacityZero"],
    comment:"纯前端，实验和练习，凌乱见谅",
    tech:"HTML,CSS,Javascript",
    target_url:baseUrl+":27777/htmls/html_testField.html",
    img_url:".\\images\\HTML5.jpg"
},
{
  title:"Vue Test Field",
  class_list:["gridCell","gridCell_Small","opacityZero"],
  comment:"纯前端，实验和练习Vue，凌乱见谅",
  tech:"HTML,CSS,Javascript,Vue.js",
  target_url:baseUrl+":27777/htmls/vueTestField.html",
  img_url:".\\images\\vueLogo.jpg"
},
{
  title:"Weather App",
    class_list:["gridCell","gridCell_Small","opacityZero"],
    comment:"简单前端与第三方API交互，并且实验和练习ES6新特性",
    tech:"HTML,CSS,Javascript（包括Ajax）",
    target_url:baseUrl+":27777/htmls/weatherApp.html",
    img_url:".\\images\\weatherApp.png"
},
{
  title:"RESTful Blog",
    class_list:["gridCell","gridCell_Middle","opacityZero"],
    comment:"简单的综合展示，包括前端、后端及数据库",
    tech:"前端：HTML,CSS,Javascript,Semantic UI 后端：Node.js,Express.js,MongoDB",
    target_url:baseUrl+":27002",
    img_url:".\\images\\BlogDemo.png"
},
{
  title:"Todo List",
    class_list:["gridCell","gridCell_Small","opacityZero"],
    comment:"简单的纯前端应用展示",
    tech:"HTML,CSS,Javascript",
    target_url:baseUrl+":27777/htmls/TodoList.html",
    img_url:".\\images\\TodoList.png"
},
{
  title:"Photo Gallery",
    class_list:["gridCell","gridCell_Small","opacityZero"],
    comment:"主要展示Bootstrap应用",
    tech:"HTML,CSS,Javascript,Bootstrap",
    target_url:baseUrl+":27777/htmls/PhotoGallery.html",
    img_url:".\\images\\PhotoGallery.png"
},
{
  title:"CSS Animation Demo",
    class_list:["gridCell","gridCell_Small","opacityZero"],
    comment:"CSS动画",
    tech:"HTML,CSS",
    target_url:baseUrl+":27777/htmls/CSS_Animation_Demo_Page.html",
    img_url:".\\images\\CSS_Animation_Demo_Page.png"
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
          clearInterval(intervalID_1);
          return;
        }
        vue_WebDemoContainer.demo_list.push(webDemoList[webDev_id]);
        webDev_id++;
        let now=webDev_id-1;
        setTimeout(function(){
          vue_WebDemoContainer.demo_list[now].class_list.pop();
        },100);
         
       };
       intervalID_1=setInterval(addDemoToList,200);
     
       let sideBar= document.querySelector(".mySideBar");
  
    document.querySelector("#toggleMenu_1").addEventListener("click",
          function(){
            sideBar.classList.toggle("veryNarrow");
          }
    );

}