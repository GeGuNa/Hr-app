const express = require('express')
const app = express()

var session = require('express-session')

app.set('trust proxy', 1) 

app.use(express.json())
app.use(express.urlencoded({extended: true})); 


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



app.get("/", (req, res) => {

//req.session.error = ''


/*
if (req.session.error !== undefined) {
console.log(`--------------`)
console.log(`test`)
console.log(req.session.error)
console.log(`--------------`)
}
*/


res.render(`index.ejs`)

res.end()
})

app.get("/in", (req, res) => {

res.render(`login.ejs`, {error: ''})

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
