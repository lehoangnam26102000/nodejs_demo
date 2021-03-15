const express=require('express')
const morgan=require('morgan')
const exphbs  = require('express-handlebars');
const path=require('path')
const app=express()
const port=3000

//Truyen path /img/f8logo.png => load ra img cho web static
app.use(express.static(path.join(__dirname,'public')))

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphbs({
    extname:".hbs" //set lai duoi ten .handlebars=>.hbs
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'))

//Template home
//app.get('/tin-tuc', (req,res)=>res.send("Hello world!"))
app.get('/home', (req,res)=>
{
    res.render('home');
})

//Template news
app.get('/news', (req,res)=>
{
    res.render('news');
})

app.listen(port,()=> console.log(`Example app listening at http://localhost:${port}`))