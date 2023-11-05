const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({

  reviewTitle: { type: String },
  reviewStart: { type: String },
  studentWatch: { type: String },
  reviewImage: {type: String },
});
const userReviewModel = mongoose.model("reviews", reviewSchema);
/////////get review model////////////
const getReviewModel = async () => {
  try {
    const data =await userReviewModel.find()
    return data
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
////////////add review model///////
const addReviewModel = async (tempObj) => {
  try {
    const data =await userReviewModel.create(tempObj)
    return data
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
////////update review model/////////
const updateReviewModel = async (tempObj,id) => {
  try {
    const data = await userReviewModel.findByIdAndUpdate(id,tempObj)
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
//////////delete review model///////////////
const deleteReviewModel = async (id) => {   
  try {
    const data= await userReviewModel.findByIdAndDelete(id)
    return data
  } catch (error) {
    return {
      message: error.message,
    };
  }
};



module.exports = {
  deleteReviewModel,
  updateReviewModel,
  addReviewModel,
  getReviewModel,
 
};
