var db= require('../dbconfiguration/dbconfiguration.js');
const Jobs= db.sequelize.define('Jobs',{

id:{

type: db.Sequelize.INTEGER, 
allowNull: false,
autoIncrement: true,
primaryKey:true


},

image: {
    type: db.Sequelize.STRING,
    allowNull:true


},

cname: {

	type: db.Sequelize.STRING,
	allowNull: false
},

jobtitle: {
    type: db.Sequelize.STRING,
    allowNull: false


},

jobdescription: {
    type: db.Sequelize.STRING,
    allowNull:false


},
experience: {
    type: db.Sequelize.STRING,
    allowNull:false


},
education: {
    type: db.Sequelize.STRING,
    allowNull:false


},

location: {
    type: db.Sequelize.STRING,
    allowNull:false


},

procedure: {
    type: db.Sequelize.STRING,
    allowNull:false
}



},





{
  freezeTableName:true,
  tableName: 'jobs'

});


Jobs.sync({force:false})
.then(function(result){
 console.log(result)  



})
.catch(function(err){

console.log(err)

})

module.exports={
   Jobs

}





