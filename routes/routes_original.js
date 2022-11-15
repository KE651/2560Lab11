let express = require('express')
// require the express library
console.log ('routes.js express library required')

let router = express.Router()
// create a router - able to respond to different requests
console.log ('routes.js created router')

router.get('/', function(req, res, next){
    console.log("routes.js express server responding")
    console.log("the request is", req)
    res.json({'message': 'Hello! Your files are connected!'})
    // any request to the router with / will receive this response
})

module.exports = router

// get statement: client's request, server response, next are the arguments

