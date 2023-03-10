const express=require('express');
const userCtrl=require('../controlers/commentsControlers')
const commentRoute=express.Router();

commentRoute.post('/post',userCtrl.createComment);
commentRoute.get('/get',userCtrl.getAllComment);
commentRoute.delete('/delete',userCtrl.deleteComment);

module.exports=commentRoute;