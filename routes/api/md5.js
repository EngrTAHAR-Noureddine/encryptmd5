const express= require('express');
const md5 = require("md5");
const router=express.Router();
const Md5 = require('../../models/md5');

router.get('/decrypt',(req,res)=>{
    const password = req.query.password.toString();
    Md5.find({ $or:[ {'PASSWORD':password}, {'MD5':password} ]},).then(resource=>res.json(resource)).catch(err=>res.status(500).send('Something went wrong!'))
});

router.get('/',(req,res)=>{
    Md5.find().then(md5s=>res.json(md5s)).catch(err=>res.status(500).send('Something went wrong!'))
});


router.post('/encrypt',(req,res)=>{

    const password = req.body["PASSWORD"].toString()
    const  md5Encrypt = md5(password);

    // console.log("PASSWORD : ", password, " md5Encrypt : ", md5Encrypt)
    // console.log("POST")
    const newPassword = new Md5({
        PASSWORD: password,
        MD5: md5Encrypt
    });
    newPassword.save().then(md5e=>res.json(md5e)).catch(err => res.send(`Error is ${err}`));
});

router.delete('/', (req, res) => {
    // console.log("Delete data")
    Md5.deleteMany({}).then(r => res.send("OK")).catch(err =>res.send("Error"));
})




module.exports = router;