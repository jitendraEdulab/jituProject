const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('name:' + req.query.name + "Roll_no: " + req.query.roll_no + "Address: " + req.query.address)
  // console.log(req.query.name);
  res.send("hello world!")

})


app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})