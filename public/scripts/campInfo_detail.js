var commentControl;
var EditControl;
window.onload=function(){
  campInfoOnWindowLoad();
  console.log("OK campInfo_detail");
  commentControl=Object.create(ButtonToHideDivProto);
  commentControl.setup("#btnComVisb","#commentIuputForm",FuncPackage(isLogin,null,null));
  EditControl=Object.create(ButtonToHideDivProto);
  EditControl.setup("#btn-edit","#form-edit", FuncPackage(isLogin,null,null));
}

