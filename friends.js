const express = require('express')
const app = express.Router()
const { Unix_timestamp, Is_number, knex, t_mail, is_Empty } = require('./funcs.js')


app.get("/", async(req, res) => {

if (tusert == 0) {
	return res.redirect('/')
}	
	
//let dflst = await knex('friends').select('*').where({user: tdatausr.uid}).limit(10)
//let dflstcnt = await knex('friends').where({user: tdatausr.uid}).count()


let dflst = await 
knex.select(
'user.uid', 
'user.name', 
'user.surn', 
'friends.user as user_id',
'friends.when as time')
    .from('friends')
    .where('friends.user', tdatausr.uid)
    .innerJoin('user', 'user.uid', 'friends.who')   
    .orderBy('friends.who', 'desc')
    .limit(10)



let dflstcnt = await knex.from('friends')
    .where('friends.user', tdatausr.uid)
    .innerJoin('user', 'user.uid', 'friends.who')   
    .count()



let psrq = {
	title:'Friend list', 
	user: tdatausr, 
	frlst: dflst,
	cnt: dflstcnt[0]['count(*)']
}

//console.log(dflstcnt[0]['count(*)'])
//console.log(dflst)



res.render('my_friends.html', psrq)

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

	
//let dflst = await knex('friends').select('*').where({user: tdatausr.uid}).limit(10)
//let dflstcnt = await knex('friends').where({user: tdatausr.uid}).count()


let dflst = await 
knex.select(
'user.uid', 
'user.name', 
'user.surn', 
'friends.user as user_id',
'friends.when as time')
    .from('friends')
    .where('friends.user', qz221a.uid)
    .innerJoin('user', 'user.uid', 'friends.who')   
    .orderBy('friends.who', 'desc')
    .limit(10)



let dflstcnt = await knex.from('friends')
    .where('friends.user', qz221a.uid)
    .innerJoin('user', 'user.uid', 'friends.who')   
    .count()



let psrq = {
	title:'Friend list',  
	user: tdatausr,
	author: qz221a,
	frlst: dflst,
	cnt: dflstcnt[0]['count(*)']
}

//console.log(dflstcnt[0]['count(*)'])
//console.log(dflst)



res.render('my_friends.html', psrq)

res.end()
})



module.exports = app
