const express = require('express');
const router = express.Router();


function testmd(req, res, next){ //req, res, next 세가지 인자를 갖는다.
	console.log('미들웨어'); //코드 실행 후
	next(); //그 다음 작업 순서를 넘겨준다.
}

function testmd2(req, res, next){ //req, res, next 세가지 인자를 갖는다.
	console.log('미들웨어'); //코드 실행 후
	next(); //그 다음 작업 순서를 넘겨준다.
}

router.get('/', testmd, testmd2, (req,res) => {
	res.send('admin 이후 url 페이지');
});

router.get( '/products', (req, res) => {
	//res.send('admin products 페이지');
	res.render('admin/products.html',{
		message : 'hello~!',
		online : 'onliness',
	} )
});

router.get('/products/write' , (req,res) => {
	res.render('admin/write.html');
});

router.post('/products/write' , (req,res) => {
		res.send(req.body);
	});

module.exports = router;