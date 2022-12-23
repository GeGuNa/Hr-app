const express = require('express')
const app = express.Router()
const { Unix_timestamp, Is_number, knex, t_mail, is_Empty } = require('./funcs.js')


app.get("/", async(req, res) => {

let psrq = {
	title:'Searching details', 
	user: tdatausr, 
}




res.render('seek.html', psrq)

res.end()
})



module.exports = app
