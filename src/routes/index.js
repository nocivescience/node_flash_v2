const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    // req.session.my_variable = 'Hello World!';
    req.session.user_data = {email, password};
    req.flash('success', 'Now You are Registered')
    res.redirect('/profile');
});
router.post('/register2',(req,res)=>{
    const {nombre,apellido}=req.body;
    req.session.datos_personales={nombre,apellido};
    res.redirect('/profile2');
})
router.post('/register3',(req,res)=>{
    const {pais,ciudad}=req.body;
    req.session.ubicacion={pais,ciudad};
    res.redirect('/profile3')
})
router.get('/profile3',(req,res)=>{
    const user3=req.session.ubicacion;
    res.render('profile3', {user3})
})
router.get('/ubicacion',(req,res)=>{
    res.render('practica3')
})
router.get('/como',(req,res)=>{
    res.render('dates')
})
router.get('/hola',(req,res)=>{
    res.render('practica1')
})
router.get('/profile', (req, res) => {
    // console.log(req.session.my_variable);
    const user = req.session.user_data;
    delete req.session.user_data;

    res.render('profile', {
        user
    });
});
router.get('/profile2',(req,res)=>{
    const user2 = req.session.datos_personales;
    res.render('profile2',{user2})
})
router.get('/products', (req, res) => {
    res.render('products')
});

module.exports = router;