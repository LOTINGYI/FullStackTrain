const express = require('express')
const mongoose = require('mongoose')

require('./models/User')
require('./services/passport') // We just ensure it executes so we don't need var
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)

const app = express()


app.get('/', (req, res) => {
    res.send({ 'bye': 'buddy' })
})

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000
app.listen(PORT)