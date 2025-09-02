const express = require('express')
const myMiddleware = require('./middlewares/myMiddleware')
const myController = require('./controllers/myController')
const app = express()

app.use(express.json())

app.get('/',(req, res)=>{
    res.send("hello developers")
})
app.post('/',myController)

app.listen(8000,()=>{
    console.log('server is running')
})

// 39.21