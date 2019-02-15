var mongoose=require("mongoose");
mongoose.set('useFindAndModify', false);//avoid warning
var mHOST="127.0.0.1";
var mPORT=27017;
var mongoUrl="mongodb://"+mHOST+":"+mPORT+"/asscoDemo";
mongoose.connect(mongoUrl,{useNewUrlParser:true});
mongoose.connection.on('connected',
            function(){
            console.log("mongoose OK");
           });
mongoose.connection.on('error',
            function(err){
            console.log("mongoose Error :"+err);
           });

var user_Model=mongoose.model("User",mongoose.Schema(
{
email:String,
name:String
}
));
function standardCallBack(err,data){
    if(err){console.log(err);}
    else{
        console.log("Operation OK");
        console.log(data);}}
var postSchema=mongoose.Schema(
    {
    title:String,
    content:String
    });
var post_Model=mongoose.model("Post",postSchema);
var UserEmbeddedPost_Schema=mongoose.Schema(
    {
    email:String,
    name:String,
    posts:[postSchema]
    });
var UserRefPost_Schema=mongoose.Schema(
        {
        email:String,
        name:String,
        posts:[{type:mongoose.Schema.Types.ObjectId,ref:"Post"}]//ref is model name
        });   

//var userEmbeddedPost_Model=mongoose.model("UserEmbeddedPost",UserEmbeddedPost_Schema);
var UserRefPost_Model=mongoose.model("User_Ref_Post",UserRefPost_Schema);
//user_Model.create({email:"user1@mail1.com",name:"User1"},createCallBack);
//post_Model.create({title:"PostTitle1",content:"PostContent1"});

//var user2=new userEmbeddedPost_Model({email:"user2@mail3.com",name:"User3"}); 
//var user4=new UserRefPost_Model({email:"user4@mail4.com",name:"User4"});//only create local, not on remote DB
//UserRefPost_Model.create({email:"user5@mail5.com",name:"User5"},standardCallBack);
//user2.posts.push({title:"PostTitle3",content:"PostContent3"},createCallBack);
//userEmbeddedPost_Model.create(user2,);
function NewPostByUser_Embedded(userParam,post){
    userEmbeddedPost_Model.findOne(userParam,function(err,_user){
        if(err){
            console.log(err);
          }else{
              _user.posts.push(post);
              _user.save(function(err,_user){
                if(err){
                  console.log(err);
                }else{
                    console.log("Post OK");
                    console.log(_user);
                }
              });
          }
      });
}
function NewPostByUser_Reference(userParam,post){
    post_Model.create(post,function(err,_post){
        if(err){
            console.log(err);
          }else{
              UserRefPost_Model.findOne(userParam,function(err,_user){
                if(err){
                    console.log(err);
                  }else{
                    _user.posts.push(_post);
                    _user.save(standardCallBack);
                  }
              });
          }
    });
}
//NewPostByUser_Reference({name:"User5"},new post_Model({title:"post5",content:"post5Content"}));
//NewPostByUser_Reference({name:"User5"},new post_Model({title:"post6",content:"post6Content"}));
UserRefPost_Model.findOne({name:"User5"}).populate("posts").exec(
function(err,_user){
    if(err){
        console.log(err);
      }else{
        console.log(_user);
      }
}
);