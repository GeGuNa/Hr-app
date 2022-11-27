const express = require('express')
const app = express.Router()



app.get("/", async(req, res) => {

let psrq

if (tusert == 1) {
psrq = {title:'Jobs', user: tdatausr}
} else {
psrq = {title:'Jobs'}
}

res.render("jobs.ejs", psrq)

res.end()
})



app.get("/add", async(req, res) => {

if (tusert == 0) {
return res.redirect('/')
}


let psrq

if (tusert == 1) {
psrq = {title:'New job', user: tdatausr}
} else {
psrq = {title:'New job'}
}

res.render("jobadd.ejs", psrq)

res.end()
})


module.exports = app
