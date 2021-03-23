//MVC 
//Controllers /news

//Tạo 1 controller để render /news
class SiteController{
    
    //[GET] /home
    index(req,res){
        res.render('home')
    }

    //[GET] /search
    search(req,res){
        res.render("search")
    }
}

module.exports=new SiteController;