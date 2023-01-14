const express = require('express')
const cookieParser = require('cookie-parser')
const fileupl = require('express-fileupload')
const escapeHTML = require('escape-html')
const job1253 = require('./jobs')
const job125333 = require('./job')
const text1254 = require('./text')
const seek_2142 = require('./seek')
const catid125552 = require('./cat')
const frndlst_1252 = require('./friends')
const usr_psts22 = require('./user_posts')
const app = express()

const prt = 2000


var mime = require('mime-types')


var session = require('express-session')
const { Unix_timestamp, Is_number, knex, ifImage, t_mail, ctlm1zz2qwe } = require('./funcs.js')

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


app.use('/pic_users', express.static('pic_users'))
app.use('/dist', express.static('dist'))
app.use('/icons', express.static('icons'))
app.use('/pics', express.static('pictures'))



//let  tusert
//let  tdatausr

global.tusert
global.tdatausr

app.use(async(req,resp,next) => {

tusert = 0;


const qusrs = req.cookies.mail || null 
const qusrp = req.cookies.pass  || null


if (qusrs != null || qusrp != null) {


tdatausr = await knex('user').where({
  mail: qusrs,
  password:  qusrp
}).select('*').first();


if (tdatausr){
	
tusert = 1	

await knex('user')
.where({uid: tdatausr.uid})
.update({
last_visit: new Date().getTime()
});

}

}

//const qzdd = await knex('user');

//console.log(await knex('user').where('uid',1).first());


 //console.dir(req.params.name)






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
app.use('/messages', text1254)
app.use('/job', job125333)
app.use('/seek', seek_2142)
app.use('/cat', catid125552)
app.use('/friends', frndlst_1252)
app.use('/user_post', usr_psts22)




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

if (tusert == 0) {
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

if (tusert == 0) {
return res.redirect('/')
}

res.render("company_add.html", {title:'New company', user: tdatausr})


res.end()
})


app.get("/my_company", async(req, res) => {

if (tusert == 0) {
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
//res.cookie('username', 'qqq', { expires: new Date(Date.now()+(3600*24*365*50*1000)) })


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


let catldata = await knex('category').select('namd','cid')

//console.log(catldata[0].namd)



if (tusert == 1) {

/*
let qdata = await knex('user').where({
  mail: 'asda@mail.ru',
  password:  '123456'
}).select('*').first();*/


psrq = {title:'Main', user: tdatausr, dataFetch: qzdtwq22,ctdata: catldata}
} else {
psrq = {title:'Main', dataFetch: qzdtwq22,ctdata: catldata}
}





res.render("index.html", psrq)

res.end()
})


/* user registration */


app.post('/signup', async(req,res) => {


const gndr2 = ['male','female','other'];
const acctp21z = ['employer','seeker'];




const qname = req.body.name || "" 
const qsurn = req.body.surn  || ""
const qmail = req.body.mail || "" 
const qpass = req.body.pass  || ""
const qnumb = req.body.number  || ""
const qgend = req.body.gender  || ""
const qacct = req.body.acttype  || ""


/*
 if (
qname &&   (qname.length>=2 || qname.length<=30) && 
qsurn &&  (qsurn.length>=2 || qsurn.length<=30) && 
qmail &&  t_mail(qmail)&&
qpass &&  (qpass.length>=2 || qpass.length<=30)  &&
qnumb &&   (qnumb.length>=2 || qnumb.length<=30)  &&
acctp21z && acctp21z.includes(qacct) &&
gndr2.includes(qgend)) {
 
 
 
 if (
(qname.length>=2 || qname.length<=30) && 
(qsurn.length>=2 || qsurn.length<=30) && 
t_mail(qmail) &&
(qpass.length>=2 || qpass.length<=30)  &&
(qnumb.length>=2 || qnumb.length<=30)  &&
acctp21z.includes(qacct) &&
//gndr2.includes(qgend)

) {
 
 
 */



if (
(qname.length>=2 || qname.length<=30) && 
(qsurn.length>=2 || qsurn.length<=30) && 
t_mail(qmail) &&
(qpass.length>=2 || qpass.length<=30)  &&
(qnumb.length>=2 || qnumb.length<=30)  &&
acctp21z.includes(qacct) &&
gndr2.includes(qgend)
) {
 
let catldata = await knex('user').where({mail: qmail}).first()
 
 
if (catldata) {
	return res.render("register.html", {title:'registration', error: 'Email already exsists'})
} 
 

tdatausr = await knex('user').insert({
  name: qname,
  surn:  qsurn,
  mail: qmail,
  number: qnumb,
  gender: qgend,
  acc_type: qacct,
  reg_time: new Date().getTime(),
  password: qpass
});
	
	
res.cookie('mail', qmail, { expires: new Date(Date.now()+(3600*24*365*50*1000)) })
res.cookie('pass', qpass, { expires: new Date(Date.now()+(3600*24*365*50*1000)) })
	
	
	
	

 return res.redirect('/')	

} else {
	
 return res.render("register.html", {title:'registration', error: 'Something went wrong'})
 
}

});

/* end of the thing */



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
	
let jbllst = await knex('job').where("user",rquid).select('*').limit(20).orderBy('jid','desc')
	
	
	
let frlstcnt22 = await knex.from('friends')
    .where('user', qz221a.uid)
    .count()
	
let usrpst2_cnt222 = await knex.from('user_posts')
    .where('user_posts.author', qz221a.uid)
    .innerJoin('user', 'user.uid', 'user_posts.author')   
    .count()	
	
	
	
	
res.render('profile.html', {
	title:'profile', 
	user: tusert ? tdatausr : undefined, 
	dataFetch: qz221a, 
	dataJ: jbllst, 
	prlstvs: ctlm1zz2qwe(qz221a.last_visit),
	frcnt21: frlstcnt22[0]['count(*)'],
	cnt_pts2zz: usrpst2_cnt222[0]['count(*)']
})

}

}


res.end()
})





/**********  company ***********/



app.get('/company/:id', async(req,res) => {

let qz221a 

const rquid = Math.abs(parseInt(req.params.id)) 

if (isNaN(rquid) === true || rquid == 0) {
res.write(`uupsi`)
} else {

qz221a = await knex('company').where("cid",rquid).select('*').first()

if (!qz221a) {
res.write(`Profile doesn't exists`)
} else {
	
	
let CuserF = await knex('user').where("uid",qz221a.user).select('*').first()
	
	
		
	
res.render('company.html', {
	title:'Company details', 
	user: tusert ? tdatausr : undefined, 
	dataC: qz221a,
	author:CuserF
})

}

}


res.end()
})



/********** end of company  ************/

app.get('/exit', async(req,res)=>{

if (tusert == 0) {
return res.redirect('/')
}

res.clearCookie('mail', '')
res.clearCookie('pass', '')
res.clearCookie('username', '')

res.redirect('/')

res.end()
})


app.get('/my', async(req,res)=>{
	
	
if (tusert == 0) {
return res.redirect('/')
}

const rquid = tdatausr.uid


let qz221a = await knex('user').where("uid",rquid).select('*').first()


let qzdtwq22_jobs = await knex('job').where('user',tdatausr.uid).select('*').orderByRaw('`jid` desc limit 5');

//console.log(qzdtwq22_jobs)


res.render('my.html', {title:'profile', user: qz221a, dataFetch: tdatausr, jdata: qzdtwq22_jobs})




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



app.get("/candidates", async(req, res) => {



let qz = await knex("user").where("acc_type",'seeker').select(knex.raw('count(*) as cnt')).first()

let qzdtwq = await knex('user').where("acc_type",'seeker').select('*').orderByRaw('uid desc limit 100');



res.render("candidates.html", {
	title:'Candidates', 
	user: tusert ? tdatausr : undefined, 
	cnt:qz.cnt, 
	dataFetch:qzdtwq
	})

res.end()
})


app.get("/employers", async(req, res) => {



let qw21qeqwez = await knex("company").count("").first()

//console.log(qw21qeqwez['count(*)'])

let qzdtwq = await knex('company').select('*').orderByRaw('cid desc limit 100');



res.render("employers.html", {
	title:'Employers', 
	user: tusert ? tdatausr : undefined, 
	cnt: qw21qeqwez['count(*)'], 
	dataFetch:qzdtwq
	})

res.end()
})





app.get("/parlor", async(req, res) => {


if (tusert == 0) {
return res.redirect('/')
}


res.render("parlor.html", {title:'Private page', user: tdatausr})

res.end()
})


app.post('/add_photo', async(req, res) => {

if (tusert == 0) {
return res.redirect('/')
}

const Filen = req.files.Photo;

 if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(200).send('Choose image first');
 }


 if (Filen === undefined) {
    return res.status(200).send('Choose image first');
  }
  

const Filet = Filen.mimetype;

const qztype = ifImage(Filet)
const qda222 = new Date().getTime()
const qz221  = Math.floor(Math.random()*10000)+1

const QzFlNm = `${qz221}_${qda222}_${Filen.name}`

Filen.mv(`${__dirname}/pic_users/${QzFlNm}`)


await knex('user').update({photo:QzFlNm}).where('uid', tdatausr.uid)

//alter table `user` add  `photo` text default '';

return res.send('done').status(200)
});





app.get("*", (req, res) => {

res.write("error")

res.end()
})


//127.0.0.1:${prt} (prt)
app.listen(prt, async(err) => {
	if (err)console.log(`done`)
})
