var commentAddControl;
var commentEditControl=[];
var EditControl;
function checkCommentForm(){
  if(document.getElementById("username")){
    var comments=document.querySelectorAll(".mySingleCmtRow");
    for(var i=0;i<comments.length;i++){
          var id=comments[i].id;
         commentEditControl.push(
           ButtonToHideDivControllerConstructor(
                "#"+id+" .btnEdit",
                "#"+id+" .formComEditDiv",
                FuncPackage(isLogin,null,null)
           )
           );
        }
  }else{
    var ComEditForms=document.querySelectorAll(".formComEditDiv");
    for(var i=0;i<ComEditForms.length;i++){
      ComEditForms[i].style.display="none";
    }
  }
}

window.onload=function(){
  campInfoOnWindowLoad();
  console.log("OK campInfo_detail");
  commentAddControl=ButtonToHideDivControllerConstructor("#btnComVisb","#commentIuputForm",FuncPackage(isLogin,null,null));
  EditControl=ButtonToHideDivControllerConstructor("#btn-edit","#form-edit", FuncPackage(isLogin,null,null));
  
  checkCommentForm();
}

