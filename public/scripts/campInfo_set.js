var commentControl;
window.onload=function(){
  campInfoOnWindowLoad();
  console.log("OK campInfo_set");
  commentControl=Object.create(ButtonToHideDivProto);
  commentControl.setup("#btnAddCamp","#form-add", FuncPackage(isLogin,null,null));
}

