const express=require('express')
const morgan=require('morgan')
const exphbs  = require('express-handlebars');
const path=require('path');
const { query } = require('express');
const app=express()
const port=3000

const route=require('./routes/index')

//Truyen path /img/f8logo.png => load ra img cho web static
app.use(express.static(path.join(__dirname,'public')))

//Middleware dùng để xử lý dữ liệu submit lên form
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphbs({
    extname:".hbs" //set lai duoi ten .handlebars=>.hbs
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'))

//Routes init
route(app)

app.listen(port,()=> console.log(`Example app listening at http://localhost:${port}`))