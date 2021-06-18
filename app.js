const express = require('express');
const app = express();

const morgan = require('morgan');

app.set('view engine','ejs');

app.listen(3000);

app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', function (req, res) {

  res.render('index',{title:'Anasayfa'});
});


app.get('/about', function (req, res) {

  res.render('about',{title:'Hakkımızda'});
});

app.get('/about-us', function (req, res) {

  res.redirect('/about');
});


app.get("/login",(req, res)=>{

res.render('login',{title:'Giris'});

});

app.use((req, res)=>{

 res.status(404).render('404',{title:'Sayfa bulunamadı'});
});
