const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema ({
  name:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model("ListOfNames", listSchema)