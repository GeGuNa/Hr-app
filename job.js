const express = require('express')
const app = express.Router()
const { Unix_timestamp, Is_number, knex, t_mail, is_Empty } = require('./funcs.js')


app.get("/", async(req, res) => {

res.status(200).send(`.....`)

res.end()
})



app.get("/:id", async(req, res) => {

if (tusert == 0) {
return res.redirect('/')
}


let qz2211 = req.params.id	

const rquid = Math.abs(parseInt(qz2211)) 


if (isNaN(rquid) === true || rquid == 0) {
	
return res.redirect('/')
	
}




let qz221a = await knex('job').where("jid",rquid).select('*').first()


if (!qz221a) {
	
return res.redirect('/')
	
}



let cmpnid = await knex('company').where("cid",qz221a.cid).select('*').first()
let jpostuser = await knex('user').where("uid",qz221a.user).select('*').first()






/*
RowDataPacket {
  jid: 1,
  user: 1,
  cid: 22,
  time: null,
  expire_time: null,
  name: 'From  zzVidea',
  mail: 'asds@gmail.com',
  number: '995555445522',
  subject: 'buhahahah',
  desc: 'qweqweqweqweqweqweqweqweqweqweqweqwe',
  work_type: '',
  empl_type: '',
  experience_time: ''
}
console.log(qz221a)
*/



let psrq = {title:'Job details', user: tdatausr, jdata: qz221a, cdata: cmpnid, usrdata: jpostuser}


res.render("job.html", psrq)

res.end()
})


















module.exports = app
