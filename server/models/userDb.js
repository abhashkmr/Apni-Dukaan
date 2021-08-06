import mongoose from 'mongoose'
const UserSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    mobile: {
        type: Number,
        required: true
      },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },{
    timestamps:true,
});


const userDb = mongoose.model('userDb',UserSchema);
export default userDb;