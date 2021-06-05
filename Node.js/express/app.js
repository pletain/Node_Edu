const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');
const bodyParser = require('body-parser');


const admin = require('./routes/admin');
// const contacts = require('./routes/contacts');

const app = express(); //객체
const port = 3000;

nunjucks.configure('template' , { //template 폴더 이후 파일 위치를 admin.js에서 설정해주면 된다.
	autoescape : true, //보안상 툴
	express : app //객체를 설정
});

//미들웨어 셋팅
app.use( logger('dev') );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended : false }) );

app.use('/uploads', express.static('uploads')); //use는 항상 앞에 URL이 나와주면 된다.
//앞에가 URL 뒤에가 폴더명이다.

app.use( (req, res , next)  =>{
	app.locals.isLogin = false;
	next();
});

//정적파일 서빙

app.get('/', (req, res) => { //request를 받아서 response를 준다. 앞에는 주소를, 뒤쪽에는 function을 넣어주면 된다.
	res.send('hello express');	
});

// app.get('/new', (req, res) => { //주소 추가 방법
// 	res.send('newbie!!');
// });
 
// function adminmiddleware(req, res, next) {
// 	console.log('admin을 거치는 모든 곳에서 가장 먼저 실행된다.');
// 	next();
// }

app.use('/admin', admin ); 

// app.use('/contacts', contacts);

app.use( (req,res,_) =>{
	res.status(400).render('common/404.html');
});
	 

app.listen(port, () => { //HTTP createServer격
	console.log('Express listening on port', port)
});

//node app.js -> nodemon app.js 코드를 변경할 때마다 수시로 서버를 끄고 저장하고 다시 서버를 키기 귀찮을 때
//npm install -g nodemon