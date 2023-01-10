const express = require('express')
const path = require('path')
const app = express()
const port = 8081;

app.use(express.static(path.join(__dirname, '/')))
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})

app.listen(port, () => {
    console.log(`App listening at port 8081, http://localhost:${port}/`)
})