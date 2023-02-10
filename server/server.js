const express = require('express')
const app =express()
const mongoose =require('mongoose')
const Response = require('./routes/Response')
const cors = require('cors')


mongoose.connect('mongodb+srv://yashwanth:kyash1234@cluster0.ausdx.mongodb.net/nlp?retryWrites=true&w=majority',{
useNewUrlParser:true,
useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log('mongo is connected.');
  })
 
  
  app.use(express.json())
  app.use(cors())
  app.use('/', Response)
  let port=2602
  app.listen(port, ()=> console.log(`server up and is running on port ${port}`))