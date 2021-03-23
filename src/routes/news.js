//routes /news

var express = require('express')
var router = express.Router()

const newsController=require('../app/controllers/NewsControllers')

router.use('/:slug', newsController.show)//  /news/abc abc là phần slug

router.use('/', newsController.index)



module.exports=router;