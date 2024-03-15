const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require('./routes/users.js')
const friendRoutes = require('./routes/friends.js')

app.use(express.static('views'))
app.use('/users', userRoutes)
app.use('/friends', friendRoutes)


app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello ")
})

app.get('/users/:id', (req, res) => {
  res.send(`This is ${req.params.id}'s Profile`)

  if (!user)
  res.send(`this user doesnt exist`)

})

app.post('/users', (req, res) => {
  res.send(`Post request successful!`)
})


app.listen(port, () => {
  console.log(`app listening on ${port}`);
});



