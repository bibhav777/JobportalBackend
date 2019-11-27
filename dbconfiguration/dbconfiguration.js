var Sequelize= require('sequelize');
var sequelize= new Sequelize('jobapp','bibav','degea123',{
 host: 'localhost',
 dialect: 'mysql',
 logging: false
  

});

sequelize.authenticate()
.then(function(result){

console.log('db connected sucessfully');

})
.catch(function(err){
	console.log(err);
});


module.exports ={
	Sequelize, sequelize
}
