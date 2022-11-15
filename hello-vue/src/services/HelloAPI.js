import axios from 'axios'
let base = 'api'

export default {
    getHelloMessage() {
        return axios.get(base).then(res => {
            return res.data
        })
    }
}
console.log("End of HelloAPI.js")
// axios call to /api, when response received automatically converts to json
// export default means provide a function with name getHelloMessage
// in main.js will add getHelloMessage to global config

// this file is a list of functions we can call