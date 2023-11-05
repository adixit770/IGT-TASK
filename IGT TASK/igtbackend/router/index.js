const express = require("express");
const { getReviewController, addReviewController, updateReviewController, deleteReviewController, addUserController, loginController, uploadReview } = require("../controller");
const auth = require("../auth");
const router = express.Router();
///////////////get user with token/////////////
router.get("/getReview",auth, getReviewController);
/////////////add review with token/////////
router.post("/addReview",auth,uploadReview, addReviewController);
/////////update review with token///////////
router.put("/updateReview/:id",auth,uploadReview,updateReviewController);
//////////delete review with token/////////
router.delete("/deleteReview/:id",auth, deleteReviewController);
///////add user with token///////////
router.post("/addUser", addUserController);
///login user///////
router.post("/loginUser", loginController);
/////get review without token//////
router.get("/getReviewUser", getReviewController);

module.exports = router;
