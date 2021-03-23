//routes /news

var express = require('express')
var router = express.Router()

const siteController=require('../app/controllers/SiteControllers')

router.use('/search', siteController.search)//  /news/abc abc là phần slug

router.use('/', siteController.index)



module.exports=router;