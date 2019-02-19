var commentControl;
window.onload=function(){
  campInfoOnWindowLoad();
  console.log("OK campInfo_set");
  commentControl=ButtonToHideDivControllerConstructor("#btnAddCamp","#form-add", FuncPackage(isLogin,null,null));
}

