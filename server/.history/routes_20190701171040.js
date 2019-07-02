const express = require('express');

const router = express.Router();

const TestData = require('./Schema');



router.get('/getData',(req,res,next)=>{
        TestData.find((error,data)=>{
            if(err)
                return res.json({success:false,error:err});
            else
                return res.json({success:true,data:data});
        })
});


router.post('/postData',(req,res,next)=>{
    const { id,name } = req.body;
    
    let data = new TestData();

    data.id = id;
    data.name = name;

    data.save((err)=>{
        if(err)
            return res.json({success:false,error:err});
        else
            return res.json({success:true});
    });
})