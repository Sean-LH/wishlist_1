const express = require("express")
const itemRouter = express.Router()
const ListOfItems = require('../models/itemModel')

itemRouter.get("/", async (req, res, next) =>{
  try {
    const result = await ListOfItems.find()
    return res.status(201).send(result)
  }catch (error) {
    res.status(500)
    return next(error)
  }
})
itemRouter.get("/:nameId", async (req, res, next) =>{
  try {
    const result = await ListOfItems.find({wisher:req.params.nameId})
    return res.status(201).send(result)
  }catch (error) {
    res.status(500)
    return next(error)
  }
})

// itemRouter.post('/p1items', async (req, res, next) =>{
//   try {
//     const newItem = new ListOfItems(req.body)
//     const savedItem = await newItem.save()
//     return res.status(201).send(savedItem)
//   }catch (error) {
//     res.status(500)
//     return next(error)
//   }
// })

itemRouter.post('/:wisherId', async (req, res, next) =>{
  try {
    req.body.wisher = req.params.wisherId
    console.log(req.body)
    const newItem = new ListOfItems(req.body)
    console.log(newItem)
    const savedItem = await newItem.save()
    return res.status(201).send(savedItem)
  }catch (error) {
    res.status(500)
    return next(error)
  }
})

itemRouter.delete('/p1items/:itemId', async (req, res, next) =>{
  try {
    const itemId = req.params.itemId
    const item = await ListOfItems.findOneAndDelete({_id:itemId})
    return res.status(201).send(`${item.name} has been deleted`)
  }catch (error) {
    res.status(500)
    return next(error)
  }
})

module.exports = itemRouter

// bountyRouter.delete("/:bountyId", async (req, res, next)=>{
//   try {
//     const bountyId = req.params.bountyId
//     const target = await BountyTargets.findOneAndDelete({_id:bountyId})
//     return res.status(201).send(`${target.first_name} has been eliminated`)
//   }catch (error) {
//     res.status(500)
//     return next(error)
//   }