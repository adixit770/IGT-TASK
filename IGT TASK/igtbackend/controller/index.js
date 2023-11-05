const { getReviewModel, deleteReviewModel, addReviewModel, updateReviewModel } = require("../model");
const { addUserModel, userModel } = require("../model/userModel");
const multer=require('multer')
const jwt=require('jsonwebtoken')
/////////get all review///////////
const getReviewController = async (req, res) => {
  try {
    const data = await getReviewModel();
    return res.send({status:200,data})
  } catch (error) {
   return res.status(400).send({
      message: error.message,
    });
  }
};
///////multer to store review image//////////
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./userReview")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})
const uploadReview=upload.single("reviewImage")
/////////add review///////////
const addReviewController = async (req, res) => {
  try {
    const {reviewTitle,reviewStart,studentWatch}=req.body
    const file=req.file
    const tempObj= {
        reviewTitle,
        reviewStart,
        studentWatch,
        reviewImage:file?.originalname
    }
    const data = await addReviewModel(tempObj);
    return res.send({status:200,message:"review success",data})
    console.log(tempObj);
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};
/////////update review//////////
const updateReviewController = async (req, res) => {
  try {
    const {id}=req.params
    const {reviewTitle,reviewStart,studentWatch}=req.body
    const file=req.file
    const tempObj={
        reviewTitle,
        reviewStart,
        studentWatch,
        reviewImage:file?.originalname
    }
    const data =await updateReviewModel(tempObj,id);
    return res.send({data,message:"update successs"})
  } catch (error) {
    return  res.status(400).send({
      message: error.message,
    });
  }
};
//////delete review//////////////
const deleteReviewController = async (req, res) => {
   
  try {
    const {id}=req.params
    console.log(id);
    const data =await deleteReviewModel(id)
    res.send({data,message:"data deleted"})
  } catch (error) {
    return res.status(400).send({
      message: error.message,
    });
  }
};
//////////add user//////////
const addUserController = async (req, res) => {
    try { 
  const data =await addUserModel(req.body)
  return res.status(200).send({data,message:"user added successfully"})
    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  };
///////////login user///////////
  const loginController = async (req, res) => {
    try {
      const {email,password}=req.body
      console.log({email,password});
      if(email==""||password==""){
        return res.send({status:400,message:"all field required"})
      }
      console.log(email);
  const isEmail =await userModel.findOne({email})
  console.log(isEmail);

  if(!isEmail){
        return res.send({status:400,message:"invalid email"})
  }
    if(isEmail.password==password){
        const token =jwt.sign({id:isEmail._id},"SECRET_KEY1",{expiresIn:"8h"})
        return res.send({status:200,data:isEmail,token})
    }
    else{
       return res.send({status:400,message:"invalid password"})
    }
    } catch (error) {
      return res.status(400).send({
        message: error.message,
      });
    }
  };
module.exports = {
  deleteReviewController,
  updateReviewController,
  addReviewController,
  getReviewController,
  addUserController,
  loginController,
  uploadReview
};
