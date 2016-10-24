var express = require ('express')
var app = express()

app.get('/', function(req, res){
res.send('hallelujah, it works!')
})

var port = Number(process.env.PORT || 3000)
app.listen(port)
