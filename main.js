const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true})); 


app.set('views', `${__dirname}/views/`)
app.set("view engine", "ejs")

app.use('/dist', express.static('dist'))
app.use('/icons', express.static('icons'))
app.use('/pics', express.static('pictures'))



app.get("/", (req, res) => {

res.render(`index.ejs`)

res.end()
})

app.get("/in", (req, res) => {

res.render(`login.ejs`)

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
