//MVC 
//Controllers /news

//Tạo 1 controller để render /news
class NewsController{
    
    //[GET] /news
    index(req,res){
        res.render('news')
    }

    //[GET] /news/:slug
    show(req,res){
        res.send("Hello")
    }
}

module.exports=new NewsController;