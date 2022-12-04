const express = require('express')
const app = express.Router()
const { Unix_timestamp, Is_number, knex, t_mail } = require('./funcs.js')


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

/*
Database changed
MariaDB [HRG]> select * from company;
+-----+------------+--------+------------------+--------+-----------------+--------------+------+------------------------------------------------------+
| cid | time       | name   | mail             | number | description     | country      | user | picurl                                               |
+-----+------------+--------+------------------+--------+-----------------+--------------+------+------------------------------------------------------+
|  22 | 1669923218 | abaa   | georgiana@top.ge | NULL   | qweqweqweqweqwe | georgia      |    1 | 3974_1669923218119_2918581.png                       |
|  23 | 1669923256 | qweqwe | qweqwe@wqeqw.ge  | NULL   | qqqqqqqqq       | qweqweqwe    |    1 | 7989_1669923256059_user-vector.webp                  |
|  24 | 1670024117 | wwww   | weqweqw@fqweq.ge | NULL   | 11111111        | wwwwwwwwwwww |    1 | 877_1670024117345_8402_1669921927241_11607991960.jpg |
|  25 | 1670027631 | qqqqqq | qwqwe@dqweq.ge   | NULL   | wwwwwwwwww      | qqqqqqqqq    |    1 | 9947_1670027631814_9004_1669922236043_eye.webp       |
+-----+------------+--------+------------------+--------+-----------------+--------------+------+------------------------------------------------------+
4 rows in set (0.000 sec)

*/


let qz221a = await knex('company').where("user",tdatausr.uid).select('*')

/*

console.log(qz221a[0].name)
console.log(qz221a[1].name)
console.log(qz221a[2].name)
console.log(qz221a[3].name)

qz221a.map((val)=> {
	console.log(val.name)
});


*/


let psrq


psrq = {title:'New job', user: tdatausr, cdata: qz221a}


res.render("jobadd.ejs", psrq)

res.end()
})









app.post("/add", async(req, res) => {

if (tusert == 0) {
return res.redirect('/')
}



const qcomp = req.body.cid
const qtitle= req.body.title
const qexp = req.body.exp
const qexpt = req.body.exp_time
const jtype = req.body.typej
const etype = req.body.etype
const qdesc = req.body.descr


let qw2zze = new Date()
let tmqwe21213

if (qtime == 1) {
	tmqwe21213 = qw2zze.getTime()+(60*60*24*7)*1000
} else if (qtime == 2) {
	tmqwe21213 = qw2zze.getTime()+(60*60*24*14)*1000
} else if (qtime == 3) {
	tmqwe21213 = qw2zze.getTime()+(60*60*24*21)*1000
} else if (qtime == 4) {
	tmqwe21213 = qw2zze.getTime()+(60*60*24*28)*1000
} else {
	tmqwe21213 = qw2zze.getTime()+(60*60*24*35)*1000
}





/*

+-----------------+------------+------+-----+---------+----------------+
| Field           | Type       | Null | Key | Default | Extra          |
+-----------------+------------+------+-----+---------+----------------+
| jid             | bigint(32) | NO   | PRI | NULL    | auto_increment |
| user            | bigint(32) | YES  | MUL | NULL    |                |
| cid             | bigint(32) | YES  | MUL | NULL    |                |
| time            | bigint(32) | YES  |     | NULL    |                |
| expire_time     | bigint(32) | YES  |     | NULL    |                |
| name            | text       | YES  |     | NULL    |                |
| mail            | text       | YES  |     | NULL    |                |
| number          | text       | YES  |     | NULL    |                |
| subject         | text       | YES  |     | NULL    |                |
| desc            | text       | YES  |     | NULL    |                |
| work_type       | text       | YES  |     | ''      |                |
| empl_type       | text       | YES  |     | ''      |                |
| experience_time | text       | YES  |     | ''      |                |
+-----------------+------------+------+-----+---------+----------------+
13 rows in set (0.001 sec)



*/

await knex('jobs').insert({
	user: tdatausr.uid,
	name: tdatausr.uid,
	cid: tdatausr.uid,
	desc: tdatausr.uid,
	experience_time: tdatausr.uid,
	empl_type: tdatausr.uid,
	work_type: tdatausr.uid,
	user: tdatausr.uid,
	user: tdatausr.uid
});





res.end()
})












module.exports = app
