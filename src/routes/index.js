//Truyền news.js vào
const newsRouter=require('./news')
const siteRouter=require('./site')

function route(app){

//Template home
// app.get('/tin-tuc', (req,res)=>res.send("Hello world!"))
// app.get('/home', (req,res)=>
// {
//     res.render('home');
// })
app.use('/',siteRouter)

//Template news
// app.get('/news', (req,res)=>
// {
//     res.render('news');
// })
app.use('/news',newsRouter)

//Search
//[GET]
// app.get('/search', (req,res)=>
// {
//     res.render('search');
// })

//[POST]
// app.post('/search', (req,res)=>
// {
//     res.render('search');
// })

}

module.exports=route;