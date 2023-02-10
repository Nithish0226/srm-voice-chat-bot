const mongooes = require ('mongoose')

const NoResponse = new mongooes.Schema({
    question:{ 
        type: String,
      requited: true,
      }
})

module.exports = mongooes.model('NoResponse',NoResponse)
