


var SpecialSymbols =  {
    '<': '&lt;',
    '>': '&gt;',
    '(': '&#40;',
    ')': '&#41;',
    '#': '&#35;',
    '&': '&amp;',
    '"': '&quot;',
    "'": '&apos;'
};


function Unix_timestamp(){

const dt = new Date;

return parseInt(dt.getTime()/1000);
}


function t_mail(mlll){

let qq = /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,8}$/i

return qq.test(mlll);

}


function Is_number(id) {

var cidck =  /^[0-9]+$/	

//id = Math.abs(id)	
	
return cidck.test(id)
}


const knex = require('knex')({
client: 'mysql',
connection: {
user:'hrg',
database:'HRG',
password: '123456',
port:'',
}
});



function ifImage(name) {

const Tpimage = /^image\/(jpg|jpeg|png|gif|webp|bmp)+$/

if (Tpimage.test(name)) {
  return name.split("/")[1]
} else {
 return false; 
}

}




module.exports = { Unix_timestamp, Is_number, knex, ifImage, t_mail }
