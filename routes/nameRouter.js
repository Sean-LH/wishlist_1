const express = require('express')
const nameRouter = express.Router()
const ListOfNames = require('../models/listModel')

nameRouter.get("/", async (req, res, next)=>{
  try { 
    const result = await ListOfNames.find()
    return res.status(200).send(result)
  } catch (error) {
    res.status(500)
    return next(error)
  }
})

nameRouter.post("/", async (req, res, next)=>{
try {
  const newName = new ListOfNames(req.body)
  const savedName = await newName.save()
  return res.status(201).send(savedName)
} catch (error) {
  res.status(500)
  return next(error)
}
})

nameRouter.delete("/:nameId", async (req, res, next)=>{
  try {
    const nameId = req.params.nameId
    const person = await ListOfNames.findOneAndDelete({_id:req.params.nameId})
    return res.status(201).send(`${person.name}`)
  }catch (error) {
    res.status(500)
    return next(error)
  }
})

// bountyRouter.delete("/:bountyId", async (req, res, next)=>{
//   try {
//     const bountyId = req.params.bountyId
//     const target = await BountyTargets.findOneAndDelete({_id:bountyId})
//     return res.status(201).send(`${target.first_name} has been eliminated`)
//   }catch (error) {
//     res.status(500)
//     return next(error)
//   }
// bountyRouter.post("/", async (req,res, next) =>{
//   try {
//     const newBounty = new BountyTargets(req.body)
//     const savedBounty = await newBounty.save()
//     return res.status(201).send(savedBounty)
//   } catch (error) {
//     res.status(500)
//     return next(error)
//   }

// })

module.exports = nameRouter