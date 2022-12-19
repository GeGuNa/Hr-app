const express = require('express')
const app = express.Router()
const { Unix_timestamp, Is_number, knex, t_mail, is_Empty } = require('./funcs.js')



app.get("/mcntlst", async(req, res) => {
	
if (tusert == 0) {
return res.redirect('/')
}
	
	
	
/*		
let qz221a = await knex('message_contacts').where("me",tdatausr.uid).select('*').orderBy('when');

let qwe2 = []
let pqwe2
global.qkntwq22 = []


async function getseqwe(id){
	return await knex('user').where("uid",id).select('name','surn').first();
}
*/



await 
knex.select(
'message_contacts.when', 
'message_contacts.you',
'user.name', 
'user.surn', 
'message_contacts.you as user_id')
    .from('message_contacts')
    .where('message_contacts.me', tdatausr.uid)
    .innerJoin('user', 'user.uid', 'message_contacts.me')   
    .orderBy('message_contacts.when', 'desc')
    .limit(10)
    .then(results => res.status(200).send(results));




//console.log(qkntwq22)



res.end()
});


app.get("/", async(req, res) => {


if (tusert == 0) {
return res.redirect('/')
}


let psrq = {title:'Contact', user: tdatausr}

res.render(`mess.html`, psrq)

res.end()
})


/*
app.get("/text21", async(req, res) => {


let QPrq = req.query.text || "";
let QPrq = req.query.sbmt || "";



console.log(QPrq)

res.send('qweqweq')

res.end()
});
*/


app.get("/:id", async(req, res) => {


if (tusert == 0) {
return res.redirect('/')
}

let qzprof = req.params.id;


if (qzprof == tdatausr.uid ) {
	return res.redirect('/')
}

const rquid = Math.abs(parseInt(req.params.id)) 

if (isNaN(rquid) === true || rquid == 0) {
return res.redirect('/')
}


let qz221a = await knex('user').where("uid",qzprof).first();


if (!qz221a) {
return res.redirect('/')
}



let QPrq_T = req.query.text || "";
let QPrq_S = req.query.sbmt || "";


if (QPrq_S.length>2) {
	
await knex('message').insert({
user: tdatausr.uid,
whom: qzprof,
text: QPrq_T,
when: new Date().getTime()
});
	
	return res.redirect(`/text/${rquid}`);
	
}




let psrq = {title:'Messaging', user: tdatausr, dprof: qz221a}

res.render(`text.html`, psrq)

res.end()
})








module.exports = app
