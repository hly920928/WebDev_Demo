//console.log("myTodolist.js");
window.onload=function init1(){
    ////
    $("ul").on("click","li",function(event){
        //console.log("ClickOnDelete");
        $(this).toggleClass("completed");
       
        event.stopPropagation();
});
$(".fa-plus").click(function(event){
    //console.log("ClickOnDelete");
    $("#mainInput").fadeToggle(250);
   
    event.stopPropagation();
});
    $("ul").on("click",".DeleteB",function(event){
        //console.log("ClickOnDelete");
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
       
        event.stopPropagation();
});
////
//DeleteBEventListenerAdd();
};
////
$("input[type='text'").keypress(function(event){
    if(event.which==13){
        var taskName=$(this).val();
       if(taskName.length!=0){
        $("#list").append("<li><span class='DeleteB'><i class='fa fa-trash'></i></span>"+taskName+"</li>");
        //DeleteBEventListenerAdd();
       }
    }
});
function DeleteBEventListenerAdd(){
    $(".DeleteB").click(function(event){
        //console.log("ClickOnDelete");
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
       
        event.stopPropagation();
    });
}