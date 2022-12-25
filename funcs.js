


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


function Month(){
	
var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


let qwe = new Date();

let d = qwe.getDate()
let y = qwe.getFullYear()
let m = qwe.getMonth()


return mS[qwe.getMonth()]
}





//soon i'll organize this function properly 
function ctlm1zz2qwe(tm) {
	
let qwe = new Date(tm);

let date = qwe.getDate()
let year = qwe.getFullYear()
let month = qwe.getMonth()
let hour = qwe.getHours()
let min = qwe.getMinutes()
let sec = qwe.getSeconds()
let day = qwe.getDate()

return `${hour}/${min}/${day}/${sec}`;
}

function Date_dmy(w22){
	
let qwe = new Date(w22);

let d = qwe.getDate()
let y = qwe.getFullYear()
let m = qwe.getMonth()
var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	 
return `${d} ${mS[m]} ${y}`;	 
}



/*
function is_Empty(str, max, min = 0) {
	
let str2 = str	
	
if (Array.isArray(str2)) {	

str2.map((val) => {

 if (val == undefined || val === undefined) {
	return false	
 } 
 
  if (val.length<max) {
	 return false;
 } 
  
  return true;
	
})


} else {	
	
 if (str2 == undefined || str2 === undefined) {
	return false	
 } 
 
  if (str2.length<max) {
	 return false;
 } 
  
  return true;

 
}

}
*/


function is_Empty(str, max, min = 0) {

let str2 = str	
let res = [];	

if (Array.isArray(str2)) {	

str2.map((val)=>{

 if (val == undefined || val === undefined) {
		res.push(1)
 } else if (val.length<max) {
		res.push(1)
 } else  {
	//	
}

});

if (res.length>0)return true; else  return false;

} else {	
	
 if (str2 == undefined || str2 === undefined) {
	return true	
 } else if (str2.length<max) {
	 return true;
 }  else return false;

 
}

}

/*
 is_Empty('qweqwe',12)
 is_Empty(new Array('qweqwe','qweqwe','qweqweqwe'),12)
 is_Empty(['qweqwe','qweqwe','qweqweqwe'],15)
 */


function Unix_timestamp(){

const dt = new Date;

return parseInt(dt.getTime()/1000);
}

function time_calc(tm){
	
var date = new Date();

let today = date.getDate()
let yesterday = date.getDate()-1

var cons2 = new Date(tm);
//var yesterday = new Date(Date.now() - 86400000); //  24 * 60 * 60 * 1000

//var twoDaysAgo = new Date((new Date()).valueOf() - 1000*60*60*24*2);
//var oneHourAgo = new Date((new Date()).valueOf() - 1000*60*60);



return 	
	
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




module.exports = { Unix_timestamp, Is_number, knex, ifImage, t_mail, is_Empty, ctlm1zz2qwe }
