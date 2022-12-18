const express = require('express')
const cookieParser = require('cookie-parser')
const fileupl = require('express-fileupload')
const escapeHTML = require('escape-html')
const job1253 = require('./jobs')
const app = express()

const prt = 2000


var mime = require('mime-types')


var session = require('express-session')
const { Unix_timestamp, Is_number, knex, ifImage, t_mail } = require('./funcs.js')

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


app.use(fileupl({
  limits: { fileSize: 10*1024*1024 },
}));



app.set('views', `${__dirname}/views/`)
//app.set("view engine", "ejs")

app.engine('html', require('ejs').renderFile);


app.use('/dist', express.static('dist'))
app.use('/icons', express.static('icons'))
app.use('/pics', express.static('pictures'))



//let  tusert
//let  tdatausr

global.tusert
global.tdatausr

app.use(async(req,resp,next) => {

tusert = 0;


const qusrs = req.cookies.mail
const qusrp = req.cookies.pass


if (qusrs !== undefined || qusrp !== undefined) {

tusert = 1

tdatausr = await knex('user').where({
  mail: qusrs,
  password:  qusrp
}).select('*').first();

}

//const qzdd = await knex('user');

//console.log(await knex('user').where('uid',1).first());

next()
})


/*test
app.use(async(req,resp,next) => {

//const qzdd = await knex('user');

console.log(await knex('user').where('uid',1).first());

next()
})
*/



//  let bad_auth = req.query.msg ? true : false;




app.use('/jobs', job1253)




app.get("/get_pic/:id/", async(req,res)=>{





let qz2211 = req.params.id	

const rquid = Math.abs(parseInt(qz2211)) 






let phtwq2 


if (isNaN(rquid) === true || rquid == 0) {
	
phtwq2 = '/icons/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
	
} else {

const qzdd = await knex('company').where('cid', rquid).select('picurl').first();

if (qzdd) {	

phtwq2 = `/pictures/${qzdd['picurl']}`

} else {
	
phtwq2 = '/icons/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'
	
}

} 

const fs = require('fs');

let qzqq = fs.readFileSync(`${__dirname}${phtwq2}`);
const {size} = fs.statSync(`${__dirname}${phtwq2}`);

let qz22z_z =  mime.lookup(phtwq2);


res.set({
  'Content-Type': qz22z_z,
  'Content-Length': size,
  'ETag': 'whocares'
})



res.send(qzqq).status(200)


res.end();



});



/********************* company	*********************/ 


app.post('/add_company', async(req, res) => {

if (!tusert) {
return res.redirect('/')
}

console.log(req.files)

 if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(200).send('Choose image first');
 }

const Filen = req.files.foto;

 if (Filen === undefined) {
    return res.status(200).send('Choose image first');
  }


const Rname = req.body.cname;
const Rmail = req.body.mail;
const Rnumb = req.body.num;
const Rcountry = req.body.country;
const Rdesc = req.body.desc;


const Filet = Filen.mimetype;


const qztype = ifImage(Filet)
const qda222 = new Date().getTime()
const qz221  = Math.floor(Math.random()*10000)+1

const QzFlNm = `${qz221}_${qda222}_${Filen.name}`


if (Rname !== undefined || t_mail(Rmail) == false || Rnumb !== undefined || Rcountry !== undefined || Rdesc !== undefined) {

/*

  `time` bigint(32) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `mail` text DEFAULT NULL,
  `number` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `country` text DEFAULT NULL,
  `user` bigint(32) DEFAULT NULL,

*/

await knex('company').insert({
name: Rname, 
mail: Rmail, 
time: Unix_timestamp(),
country: Rcountry,
user: tdatausr.uid,
description: Rdesc,
picurl: QzFlNm
})


Filen.mv(`${__dirname}/pictures/${QzFlNm}`)


}


res.render("company_add.html", {title:'New company', user: tdatausr, add:'Company has been add'})




res.end()
})


app.get("/add_company", async(req, res) => {

if (!tusert) {
return res.redirect('/')
}

res.render("company_add.html", {title:'New company', user: tdatausr})


res.end()
})


app.get("/my_company", async(req, res) => {

if (!tusert) {
return res.redirect('/')
}


let qz = await knex("company").where("user",tdatausr.uid).select(knex.raw('count(*) as cnt')).first()

//console.log(qz.cnt)



let qzdtwq = await knex('company').where("user",tdatausr.uid).select('*').orderByRaw('cid desc limit 6');

//console.log(qzdtwq[0].cid)

//res.render("company_add.html", {title:'New company', user: tdatausr, dataF:qzdtwq})




res.render("my_company.html", {title:'My companies', user: tdatausr, cnt:qz.cnt, dataFetch:qzdtwq})

res.end()
})



/******************************************/



app.get("/", async(req, res) => {

/*
if (tusert == 1) {
return res.redirect('/in')
}*/

//let tm = Date.now()
const exprd = new Date(new Date().getTime()+(3600*24*365*1000));

//res.cookie('name', 'express', {path:'/', maxAge: exprd.getTime()})


//res.cookie('username', 'qqq', { expires: new Date(Date.now()+(3600*24*365*20*1000)), httpOnly: true })
res.cookie('username', 'qqq', { expires: new Date(Date.now()+(3600*24*365*50*1000)) })


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


//let ussauth = 1

/*

*/


let qzdtwq22 = await knex('job').select('*').orderByRaw('`jid` desc limit 6');
//let cmpnqweq = await knex('company').where('').select('*').first();


//console.log(cmpnqweq)


if (tusert == 1) {

/*
let qdata = await knex('user').where({
  mail: 'asda@mail.ru',
  password:  '123456'
}).select('*').first();*/


psrq = {title:'Main', user: tdatausr, dataFetch: qzdtwq22}
} else {
psrq = {title:'Main', dataFetch: qzdtwq22}
}





res.render("index.html", psrq)

res.end()
})





app.get("/signup", async(req, res) => {

if (tusert == 1) {
return res.redirect('/')
}

res.render("register.html", {title:'registration'})

res.end()
})




app.get("/in", async(req, res) => {

if (tusert == 1) {
return res.redirect('/')
}



//res.render("login.html", {error: 'qweqeqw', title:'login', user:''})

let psrq


/*
let us = 0

if (us==1) {
psrq = {title:'login', user: '124123'}
} else {
psrq = {title:'login'}
}

res.render("login.html", psrq)
*/

psrq = {title:'login'}


res.render("login.html", psrq)



res.end()
})


app.post("/in", async(req, res) => {


if (tusert == 1) {
return res.redirect('/')
}


//let qz = req.body.mail
//let qz2 = req.body.pass


/*

req.session.error = '';
let qz = req.session.error
console.log(qz)

*/


//res.render("login.html", {error: 'qweqeqw', title:'login', user:''})

/*
let us = 0
let psrq

if (us==1) {
psrq = {title:'login', user: '124123'}
} else {
psrq = {title:'login'}
}

res.render("login.html", psrq)
*/

const qusrs = req.body.mail
const qusrp = req.body.pass

let psrq

if (qusrs === undefined || qusrp === undefined) {

psrq = {title:'login', error: 'user or password is incorrect'}

res.render("login.html", psrq)


} else {

let qdata = await knex('user').where({
  mail: qusrs,
  password:  qusrp
}).select('*').first();


if (qdata) {

res.cookie('mail', qusrs, { expires: new Date(Date.now()+(3600*24*365*50*1000)) })
res.cookie('pass', qusrp, { expires: new Date(Date.now()+(3600*24*365*50*1000)) })


return res.redirect('/')
} else {
psrq = {title:'login', error: 'user or password is incorrect'}
}

res.render("login.html", psrq)


}



//res.write(`qweqweqwe`)


res.end()
})



app.get('/profile/:id', async(req,res)=>{

let qz221a 

const rquid = Math.abs(parseInt(req.params.id)) 

if (isNaN(rquid) === true || rquid == 0) {
res.write(`uupsi`)
} else {

qz221a = await knex('user').where("uid",rquid).select('*').first()

if (!qz221a) {
res.write(`Profile doesn't exists`)
} else {
res.render('profile.html', {title:'profile', user: qz221a, dataFetch: tdatausr})
}

}




//console.log(qz221a)

/*

*/




res.end()
})


/* ************/


app.get("/contact", async(req, res) => {

if (tusert == 1) {
psrq = {title:'Contact', user: tdatausr}
} else {
psrq = {title:'Contact'}
}



res.render("contact.html", psrq)

res.end()
})



app.post("/contact", async(req, res) => {

const qmail = req.body.mail
const qname = req.body.fname
const qsubj = req.body.subj
const qnumb = req.body.num
const qtext = req.body.txtw

if (qmail !== undefined || qname !== undefined || qsubj !== undefined || qnumb !== undefined || qtext !== undefined) {

/*

  `name` text DEFAULT NULL,
  `mail` text DEFAULT NULL,
  `number` text DEFAULT NULL,
  `subject` text DEFAULT NULL,
  `desc` text DEFAULT NULL,

*/


await knex('contact').insert({
  name: qname,
  mail:  qmail,
	number:  qnumb, 
	subject:  qsubj,
	desc:  qtext
});

res.render('contact.html', {title: 'Contact', sent: 'Your question been sent, wait soon we will answer'})

} else {

res.render('contact.html', {title: 'Contact',error: 'something went off'})

}

res.end()
})

/**************/




/********mesage******/



app.get("/mcntlst", async(req, res) => {
	
if (tusert == 0) {
return res.redirect('/')
}
	
	
	
/*		
let qz221a = await knex('message_contacts').where("me",tdatausr.uid).select('*').orderBy('when');

let qwe2 = []
let pqwe2
global.qkntwq22 = []


async function getseqwe(id){
	return await knex('user').where("uid",id).select('name','surn').first();
}
*/



await 
knex.select(
'message_contacts.when', 
'message_contacts.you',
'user.name', 
'user.surn', 
'message_contacts.you as user_id')
    .from('message_contacts')
    .where('message_contacts.me', tdatausr.uid)
    .innerJoin('user', 'user.uid', 'message_contacts.me')   
    .orderBy('message_contacts.when', 'desc')
    .limit(10)
    .then(results => res.status(200).send(results));




//console.log(qkntwq22)



res.end()
});


app.get("/messages", async(req, res) => {


if (tusert == 0) {
return res.redirect('/')
}


let psrq = {title:'Contact', user: tdatausr}

res.render(`mess.html`, psrq)

res.end()
})


/*
app.get("/text21", async(req, res) => {


let QPrq = req.query.text || "";
let QPrq = req.query.sbmt || "";



console.log(QPrq)

res.send('qweqweq')

res.end()
});
*/


app.get("/text/:id", async(req, res) => {


if (tusert == 0) {
return res.redirect('/')
}

let qzprof = req.params.id;


if (qzprof == tdatausr.uid ) {
	return res.redirect('/')
}

const rquid = Math.abs(parseInt(req.params.id)) 

if (isNaN(rquid) === true || rquid == 0) {
return res.redirect('/')
}


let qz221a = await knex('user').where("uid",qzprof).first();


if (!qz221a) {
return res.redirect('/')
}



let QPrq_T = req.query.text || "";
let QPrq_S = req.query.sbmt || "";


if (QPrq_S.length>2) {
	
await knex('message').insert({
user: tdatausr.uid,
whom: qzprof,
text: QPrq_T,
when: new Date().getTime()
});
	
	return res.redirect(`/text/${rquid}`);
	
}




let psrq = {title:'Messaging', user: tdatausr, dprof: qz221a}

res.render(`text.html`, psrq)

res.end()
})



/**************/


app.get("/candidates", async(req, res) => {



let qz = await knex("user").where("acc_type",'seeker').select(knex.raw('count(*) as cnt')).first()

let qzdtwq = await knex('user').where("acc_type",'seeker').select('*').orderByRaw('uid desc limit 100');



res.render("candidates.html", {title:'Candidates', user: tdatausr, cnt:qz.cnt, dataFetch:qzdtwq})

res.end()
})


app.get("/employers", async(req, res) => {



let qw21qeqwez = await knex("company").count("").first()

//console.log(qw21qeqwez['count(*)'])

let qzdtwq = await knex('company').select('*').orderByRaw('cid desc limit 100');



res.render("employers.html", {title:'Employers', user: tdatausr, cnt: qw21qeqwez['count(*)'], dataFetch:qzdtwq})

res.end()
})





app.get("/parlor", async(req, res) => {


if (tusert == 0) {
return res.redirect('/')
}


res.render("parlor.html", {title:'Private page', user: tdatausr})

res.end()
})






app.get("*", (req, res) => {

res.write("error")

res.end()
})


//127.0.0.1:${prt} (prt)
app.listen(prt, async(err) => {
	if (err)console.log(`done`)
})
