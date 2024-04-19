const express = require('express')
const app = express()
const morgan = require('morgan')
const port = process.env.port || 2400
const mongoose = require('mongoose')
const nameRouter = require('./routes/nameRouter')
const listRouter = require('./routes/itemRouter')

const path = require("path")

// Middleware 
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "dist")))

// error Handler
app.use( (err, req, res, next) =>{
  console.log(err)
  return res.send({errMsg: err.message})
})

mongoose.connect("mongodb+srv://slhorace01:ANNt5o3zUaSG3vHI@wisher0.spedshm.mongodb.net/")
  .then(()=> console.log('DB connection is green'))
  .catch(err => console.log(err))

// Endpoints

app.use('/api/names', nameRouter)

app.use("/api/items", listRouter)

// app.get('/',(req, res)=>{
//   res.send(`Hello World`)
// })

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(port, () =>{
  console.log(`server is green on port ${port}`)
})

//wisher0:
//slhorace01
//ANNt5o3zUaSG3vHI