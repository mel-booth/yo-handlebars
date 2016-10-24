var express = require ('express')
var app = express()

app.get('/', function(req, res){
res.send('hallelujah, it works!')
})

app.use('/public', express.static('public'))

var port = Number(process.env.PORT || 3000)
app.listen(port)
