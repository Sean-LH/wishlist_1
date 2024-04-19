const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  type:{
    type: String,
    required: false
  },
  cost: Number,
  wisher:{
    type: Schema.Types.ObjectId,
    ref: "ListOfNames", 
    required: true
  }
})

module.exports = mongoose.model("ListOfItems", itemSchema)