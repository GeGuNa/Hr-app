const express = require('express')
const app = express.Router()
const { Unix_timestamp, Is_number, knex, t_mail, is_Empty } = require('./funcs.js')


app.get("/", async(req, res) => {

res.status(200).send(`.....`)

res.end()
})



app.get("/:id", async(req, res) => {

let qz2211 = req.params.id	

const rquid = Math.abs(parseInt(qz2211)) 

if (isNaN(rquid) === true || rquid == 0) {
	
return res.redirect('/')
	
}

let qz221a = await knex('category').where("cid",rquid).select('*').first()

if (!qz221a) {
	
return res.redirect('/')
	
}


let cmpnid = await knex('job').where("cat_id", rquid).orderByRaw('jid desc limit 25')
let cntpds2212 = await knex('job').where("cat_id", rquid).count({count: '*'})
//console.log(cmpnid)

let psrq

if (tdatausr) {

psrq = {
	title:'Jobs by category', 
	user: tdatausr, 
	data2: cmpnid,
	cnt: cntpds2212
}

} else {

psrq = {
	title:'Jobs by category', 
	data2: cmpnid,
	cnt: cntpds2212
}
	
}

//console.log(psrq)

res.render("cat.html", psrq)

res.end()
})


















module.exports = app
