const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/timeout', function(req, res){
    setTimeout(() => {
    res.send("i don't see a lot of PUT requests anymore")

    }, 60 * 10 * 1000)// 这里设置服务器的响应时间

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
