const express = require ('express');
const router = express.Router();



//Routes
router.get('/',(req, res)=>{
    res.render('index.html', {title: 'First Webside'});

});

router.get('/home',(req, res)=>{
    res.render('home.html', {title: 'Home Page'});
});



module.exports = router;