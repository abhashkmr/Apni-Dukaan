import jwt from 'jsonwebtoken';


function generateToken(user) {
    //1. Don't use password and other sensitive fields
    //2. Use the information that are useful in other parts
    if (!user) return null;
   
    var u = {
      userId: user._id,
      name: user.name,
      username: user.email,
      
    };
   
    return jwt.sign(u, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 // expires in 24 hours
    });
  }
   
  // return basic user details
  function getCleanUser(user) {
    if (!user) return null;
   
    return {
      userId: user._id,
      name: user.name,
      username: user.email,
      
    };
  }
   
//   module.exports = {
//     generateToken,
//     getCleanUser
//   }
  export default {generateToken,getCleanUser};