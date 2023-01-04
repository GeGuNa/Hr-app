const express = require('express')
const app = express.Router()
const { Unix_timestamp, Is_number, knex, t_mail, is_Empty } = require('./funcs.js')


app.get("/", async(req, res) => {

if (tusert == 0) {
	return res.redirect('/')
}
	
//const rquid = tdatausr.uid	
	
return res.redirect(`/my`)


res.end()
})




app.get("/:id", async(req, res) => {

if (tusert == 0) {
	return res.redirect('/')
}	

const rquid = Math.abs(parseInt(req.params.id)) 

if (isNaN(rquid) === true || rquid == 0) {
	return res.redirect('/')
} 

let qz221a  = await knex('user').where("uid",rquid).select('*').first()

if (!qz221a) {
	return res.redirect('/')
} 


let dflst = await 
knex.select(
'user.uid', 
'user.name', 
'user.surn', 
'user_posts.when_posted as time',
'user_posts.title as title',
'user_posts.message as text'
)
    .from('user_posts')
    .where('user_posts.author', qz221a.uid)
    .innerJoin('user', 'user.uid', 'user_posts.author')   
    .orderBy('user_posts.when_posted', 'desc')
    .limit(10)



let dflstcnt = await knex.from('user_posts')
    .where('user_posts.author', qz221a.uid)
    .innerJoin('user', 'user.uid', 'user_posts.author')   
    .count()



let psrq = {
	title:'User posts', 
	user: tdatausr,
	author: qz221a,
	pstlst: dflst,
	cnt: dflstcnt[0]['count(*)']
}

res.render('my_posts.html', psrq)

res.end()
})



module.exports = app
