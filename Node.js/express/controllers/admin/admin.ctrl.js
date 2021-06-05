exports.get_products = ( _ , res) => {
    res.render( 'admin/products.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    res.send(req.body);
}

//실제 라우팅이 되는것을 볼 수있다.
//모든 폴더별 위치가 지정되어 있다.




//server.js : 서버를 뜨는 역할, 나중에 소켓.io가 붙을 수도 있다.
//app.js : express  관련 셋팅
//controllers : 
//controllers/index 대분류 URL + 폴더 위치
//controllers/admin/index.js (admin url + 미들웨어)
//controllers/admin/admin.ctrl.js ( 컨트롤러 역할)