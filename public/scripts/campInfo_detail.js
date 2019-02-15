var commentControl;
var EditControl;
window.onload=function(){
  campInfoOnWindowLoad();
  console.log("OK campInfo_detail");
  commentControl=ButtonToHideDiv;
  commentControl.setup("btnComVisb","commentIuputForm");
  EditControl=ButtonToHideDiv;
  EditControl.setup("btn-edit","form-edit");
}

