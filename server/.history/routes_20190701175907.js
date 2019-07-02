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

});

router.delete('/deleteData',(req,res,next)=>{
    const id = req.body.id;

    TestData.findByIdAndRemove(id,(err)=>{
        if(err)
            return res.json({success:false,error:err});
        else
            return res.json({success:true});
    });
});

router.post('/updateData',(req,res,next)=>{
    const {id,name } = req.body;
    TestData.findByIdAndUpdate(id,(err)=>{
        if(err)
            return req.json({success:false,error:err});
        else
            return res.json({success:false});
    });
});

