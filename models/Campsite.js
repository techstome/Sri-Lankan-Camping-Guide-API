import mongoose from 'mongoose';
const { Schema } = mongoose;

const CampsiteSchema = new Schema({
  campsite_name:{
    type: String,
    required: true
  },
  location_address:{
    type: String,
    required: true
  },
  descripton:{
    type: String,
    required: true
  },
  photos_of_location:{
    type: [String],
    required: true
  },
  photos_of_legal_docs:{
    type: [String],
    required: true
  },
});

export default mongoose.model("Campsites", CampsiteSchema)