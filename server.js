const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const db = require("./connection/config.js")
const path = require("path")
const Dog = require("./models/Dog")

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Database Name
const dbName = 'dogs_db';

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
})

app.get("/api/getdata", async (req, res) => {

})

app.post("/api/adddata", async (req, res) => {
  const age = req.body.age
  const name= req.body.name
  const breed= req.body.breed
    Dog.create({dogName:name, dogAge:age, dogBreed:breed})
      .then(data=>{
        res.send(data)
      }).catch(err=>{
        res.json(err)
      }) 
})

db.once("open", () => {
  app.listen(PORT, () => {
    console.log("LISTEN ON PORT" + PORT)
  })
})