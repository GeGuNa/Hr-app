const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

var session = require('express-session')
const { Unix_timestamp, Is_number, knex } = require('./funcs.js')

app.set('trust proxy', 1) 

app.use(express.json())
app.use(express.urlencoded({extended: true})); 

app.use(cookieParser())

app.use(session({
  secret: 'whocares',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))



app.set('views', `${__dirname}/views/`)
app.set("view engine", "ejs")

app.use('/dist', express.static('dist'))
app.use('/icons', express.static('icons'))
app.use('/pics', express.static('pictures'))

/*test
app.use(async(req,resp,next) => {

//const qzdd = await knex('user');

console.log(await knex('user').where('uid',1).first());

next()
})
*/



//  let bad_auth = req.query.msg ? true : false;


app.get("/", async(req, res) => {

//let tm = Date.now()
const exprd = new Date(new Date().getTime()+(3600*24*365*1000));

res.cookie('name', 'express', {path:'/', maxAge: exprd.getTime()})

//req.session.error = ''


/*
if (req.session.error !== undefined) {
console.log(`--------------`)
console.log(`test`)
console.log(req.session.error)
console.log(`--------------`)
}
*/

//console.log(await knex('user').where('uid',1).first())


let ussauth = 0


if (ussauth == 1) {
psrq = {title:'Main', user: '124123'}
} else {
psrq = {title:'Main'}
}



res.render("index.ejs", psrq)

res.end()
})

app.get("/in", (req, res) => {

//res.render("login.ejs", {error: 'qweqeqw', title:'login', user:''})

let us = 0
let psrq

if (us==1) {
psrq = {title:'login', user: '124123'}
} else {
psrq = {title:'login'}
}

res.render("login.ejs", psrq)

res.end()
})


app.post("/in", (req, res) => {

let qz = req.body.mail
let qz2 = req.body.pass


console.log(qz)
console.log(qz2)

/*

req.session.error = '';
let qz = req.session.error
console.log(qz)

*/



res.write(`qweqweqwe`)


res.end()
})


app.get("*", (req, res) => {

res.write("error")

res.end()
})


//127.0.0.1:2000
app.listen(2000, () => {
	console.log(`done`)
})
