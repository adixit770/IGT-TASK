const mongoose = require("mongoose");
const validator=require('validator')
const userSchema = mongoose.Schema({
  name: { type: String ,required:[true,"name is required"]},
  email: { type: String ,required:[true,"name is required"],unique:true,validate:[validator.isEmail,"enter valid email"]},
  mobile: { type: String ,required:[true,"name is required"]},
  password: { type: String },
});
const userModel = mongoose.model("users", userSchema);
/////////add user model///////
const addUserModel = async (obj) => {
    try {
      const data = await userModel.create(obj);
      return data;
    } catch (error) {
      return {
        message: error.message,
      };
    }
  };

  module.exports = {
   
    addUserModel,userModel
  };
  