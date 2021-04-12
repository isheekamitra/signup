const express=require("express");
const router =express.Router();
const signuptemplatecopy=require('../models/Signupmodels');
const bcrypt=require("bcrypt");

router.post('/signup',async function(req,res){
   const saltpassword= await bcrypt.genSalt(10)
   const securepass=await bcrypt.hash(req.body.password,saltpassword)
  const signupeduser= new signuptemplatecopy({
      fullname:req.body.fullname,
      username:req.body.username,
      email:req.body.email,
      password:securepass
  });
  signupeduser.save()
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    res.json(err)
  })
});
module.exports=router