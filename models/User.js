import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name:{
    type: String,
    required: true
  },
  last_name:{
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  nic:{
    type: String,
    required: true,
    unique: true
  },
  phone_number:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  is_admin:{
    type: Boolean,
    default: false
  }
}, {timestamps: true});

export default mongoose.model("User", UserSchema)