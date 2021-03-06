var usermodel=require('../model/usermodel.js');
var bcrypt= require('bcrypt');
var jwt=require('jsonwebtoken');

function validator(req,res,next){
   usermodel.User.findOne({
   
   where:{username:req.body.username}
})

   .then(function(result){
    
    req.hashedPassword= result.dataValues.password
     next();
})

   .catch(function(err){
   	next({"status": 400, "message":"Sorry! Username or password didnt matched"});
})

}

function pwdcheck(req,res,next){
bcrypt.compare(req.body.password,req.hashedPassword)
.then(function(result){
 next();



})
.catch(function(err){
  next({"status":400, "message":"Password does not match"});


})

} 

function jwtToken(req,res,next){
jwt.sign({username:req.body.username},'secretkey',{expiresIn:"10hr"},


  function(err,token){
  if(err !=null || undefined ){
    console.log(err)
    next({"status":400,"message":"UNauthorized tokens"})

  }else{
    req.Token=token;
    next();
    //console.log(token)
  }


})


}


function verifyToken(req,res,next){
  let token=req.headers.authorization.slice(6,req.headers.authorization.lenght);
  jwt.verify(token,'secretkey',function(err, decode){
    if(err !=null){
    next({status:500,message:err.message})
    console.log(err);

  }else{
    next();
  }


  } )

}

module.exports={
	validator,pwdcheck,jwtToken,verifyToken
}