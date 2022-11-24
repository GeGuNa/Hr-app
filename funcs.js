function Unix_timestamp(){

const dt = new Date;

return parseInt(dt.getTime()/1000);
}


function Is_number(id) {

var cidck =  /^[0-9]+$/	

//id = Math.abs(id)	
	
return cidck.test(id)
}


const knex = require('knex')({
client: 'mysql',
connection: {
user:'',
database:'',
password: '',
port:'',
}
});


module.exports = { Unix_timestamp, Is_number, knex }
