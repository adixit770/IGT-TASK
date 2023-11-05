const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {

    const validToken = req.headers["x-access-token"];
    if (!validToken) {
      return res.send({ status:403,auth: false, message: "Token not provided" });
    }
    jwt.verify(validToken, "SECRET_KEY1", async (error, valid) => {
      if (error) {
      return  res.send({ status:401, auth: false, message: "Token not verify" });
      }
      req.userId = valid.id;
      next();
    });
  
};
module.exports=auth