const express = require('express')
const app = express()
const Encoder = require('./Encoder');
var cors = require('cors')
app.use(cors())

app.get('/encode/:str', function (req, res) {
    let encoder = new Encoder(req.params.str);
    let result = encoder.encode();
   res.send (result);
})
app.listen(8080,()=>{console.log('listening')})