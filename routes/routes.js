let express = require('express')
let router = express.Router()
router.get('/', function(req, res, next){
    res.json({'message': 'I hope this works'})
})
module.exports = router
console.log("End of routes.js")