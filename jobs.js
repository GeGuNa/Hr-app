const express = require('express')
const app = express.Router()
const { Unix_timestamp, Is_number, knex, t_mail, is_Empty } = require('./funcs.js')


app.get("/", async(req, res) => {

let psrq



let qzdtwq22 = await knex('job').select('*').orderByRaw('`jid` desc limit 6');

if (tusert == 1) {
psrq = {title:'Jobs', user: tdatausr, dataFetch: qzdtwq22}
} else {
psrq = {title:'Jobs', dataFetch: qzdtwq22}
}






res.render("jobs.html", psrq)

res.end()
})



app.get("/my", async(req, res) => {

if (!tusert) {
return res.redirect('/')
}


let qz = await knex("job").where("user",tdatausr.uid).select(knex.raw('count(*) as cnt')).first()

//console.log(qz.cnt)


let qzdtwq = await knex('job').where("user",tdatausr.uid).select('*').orderByRaw('jid desc limit 6');


res.render("my_jobs.html", {title:'Job list', user: tdatausr, cnt:qz.cnt, dataFetch:qzdtwq})

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


let catldata = await knex('category').select('namd','cid')



let psrq = {title:'New job', user: tdatausr, cdata: qz221a, cats: catldata}


res.render("jobadd.html", psrq)

res.end()
})









app.post("/add", async(req, res) => {

if (tusert == 0) {
return res.redirect('/')
}

const qcomp = req.body.cid

const rquid = Math.abs(parseInt(qcomp)) 

if (isNaN(rquid) === true || rquid == 0) {
	return res.status(200).send('uups1')
}


let qz221a = await knex('company').where("cid",rquid).select('*')

if (!qz221a) {
	return res.status(200).send('uups2')
}







const qtitle = req.body.title
const qexp = req.body.exp
const qexpt = req.body.exp_time
const jtype = req.body.typej
const etype = req.body.etype
const qdesc = req.body.descr
const qwplc = req.body.working_place
const catid_1 = parseInt(req.body.cat_id)


let ctq21zg3123 = await knex('category').where("cid",catid_1).select('*').first()



if (!ctq21zg3123) {
	return res.status(200).send('upsss cat doesnt exists, are you trying to do something ? boy ')
}

//let qrwwarr = [qtitle,qdesc];

//console.log(qtitle.length)


if (!is_Empty(qtitle,128)){ return res.status(200).send('uups3') }
else if (!is_Empty(qexp,30)){  return res.status(200).send('uups4') }	
else if (!is_Empty(qexpt,30)){ return res.status(200).send('uups5') } 
else if (!is_Empty(jtype,30)){   return res.status(200).send('uups6') }
else if (!is_Empty(etype,50)){  return res.status(200).send('uups7') } 
else if (!is_Empty(qdesc,5000)){  return res.status(200).send('uups8') }
else if (!is_Empty(qwplc,128)){  return res.status(200).send('uups9') }
else if (isNaN(catid_1) === true || catid_1 == 0) { return res.status(200).send('cat id error') }

else {  }
	


let qw2zze = new Date()
let tmqwe21213

if (qexpt == 1) {
	tmqwe21213 = qw2zze.getTime()+(60*60*24*7)*1000
} else if (qexpt == 2) {
	tmqwe21213 = qw2zze.getTime()+(60*60*24*14)*1000
} else if (qexpt == 3) {
	tmqwe21213 = qw2zze.getTime()+(60*60*24*21)*1000
} else if (qexpt == 4) {
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
| place           | text       | YES  |     | ''      |                |
+-----------------+------------+------+-----+---------+----------------+
14 rows in set (0.001 sec)


*/


let kzr2 = await knex('job').insert({
	user: tdatausr.uid,
	name: qtitle,
	cid: rquid,
	desc: qdesc,
	experience_time: qexp,
	empl_type: etype,
	work_type: jtype,
	expire_time: tmqwe21213,
	place: qwplc,
	time: new Date().getTime(),
	cat_id: catid_1
}).returning('jid');


return res.redirect(`/job/${kzr2}`)


res.end()
})












module.exports = app
