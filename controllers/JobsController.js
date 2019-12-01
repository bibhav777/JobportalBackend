var job= require('../model/jobs.js');

//sss//var uploads= multer({
 //dest: 'uploads'


//});


function addJob(req,res,next){

	job.Jobs.create({
     image: req.file.filename,
     cname: req.body.cname,
     jobtitle:req.body.jobtitle,
     jobdescription: req.body.jobdescription,
     experience: req.body.experience,
     education: req.body.education,
     location: req.body.location,
     procedure:req.body.procedure 


})
.then(function(result){
next();


})
.catch(function(err){
 
next({"status":500, "message": "Failed to add jobsssss"});

}) ;
};


function viewjobs(req,res,next){
   job.Jobs.findAll(
  
)
   .then(function(result){
    res.json(result);


   })
   .catch(function(err){
    next();


   })


}
function getjob(req,res,next){
job.Jobs.findOne({
where:{id:req.params.uid}

}).then(function(result){
   //console.log(result)
   res.status(200)

   res.json(result);

}).catch(function(){
next();

})



}
function updatejob(req,res,next){
job.Jobs.update({
 cname: req.body.cname,
  jobtitle:req.body.jobtitle,
  jobdescription: req.body.jobdescription,
  experience: req.body.experience,
  education: req.body.education,
  location: req.body.location,
  procedure:req.body.procedure 
 
},{
  where:{
  id : req.params.uid
}


})


.then(function(result,status){
// res.send("Matches updated successfully")
// res.status(201);
// next()
next({status:200,"message":"updated"});


}).catch(function(err){
  next();



}) 


}


function deletejobs(req,res,next){
job.Jobs.destroy({
       where:{id:req.params.uid}



}).then(function(){

res.status(200)
res.send({"message":"DELETED SUCCESSFULLY"})

}).catch(function(err){
next();



})



}



module.exports= {
	addJob,viewjobs,deletejobs,getjob,updatejob
}