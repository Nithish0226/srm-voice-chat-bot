const { response } = require('express')
const express = require('express');
const router = express.Router()
const NoResponse = require('../models/NoResponse')

const { uuid } = require('uuidv4');
const axios = require('axios')
const moment = require('moment');





router.get('/', (req, res) => {
  res.status(200).send("server is up")
})
router.post('/post',(request,response)=>{
  var question = request.body.question
  
  axios
    .post('http://127.0.0.1:5000/post', {
      question: question
    })
    .then(res => {
      //console.log(`statusCode: ${res.status}`)
      var a=res.data.answer
      response.send(a)
      if(a==="Not Found!! Please contact the admin dept"){
        const noresponse = new NoResponse({
          question:question
      })
      noresponse.save()
          .then(data => {
          }).catch(err => {
              if (err) {
                  
              }
          })
      }
    })
    .catch(error => {
      //console.error(error)
    })
  
  })

  module.exports = router