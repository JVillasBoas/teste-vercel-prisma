const express = require('express')
// call my controller
const routes = require('./routes/routes')

const app = express()

const port = 3000

app.use(express.json())

// routes
app.use('/api',routes)

app.listen(port,()=>{
    console.log("Server running at port " + port)
})
