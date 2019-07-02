const express = require('express');

const router = express.Router();

const TestData = require('./Schema');

//route to fetch all data present in the database
router.get('/getData',(req,res,next)=>{
        TestData.find((err,data)=>{
            if(err)
                return res.json({success:false,error:err});
            else
                return res.json({success:true,data:data});
        })
});

//route to post a new data to the database
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

//route to delete a particular document from the database with the passed id
router.delete('/deleteData',(req,res,next)=>{
    const { id } = req.body;

    TestData.findByIdAndRemove(id,(err)=>{
        if(err)
            return res.send(err);
        else
            return res.json({success:true});
    });
});


//route to update a particular document from the database with the passed id
router.post('/updateData',(req,res,next)=>{
    const {id,name } = req.body;
    TestData.findByIdAndUpdate(id,name,(err)=>{
        if(err)
            return res.json({success:false,error:err});
        else
            return res.json({success:true});
    });
});

module.exports = router;