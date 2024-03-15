const users = [
    {
        id: 1,
        name: "Mike",
        username: "mikeyg123",
        comment: " i love coding",
    },
    {
        id: 2,
        name: "Ori",
        username: "Ooori",
        comment: "I cant wait for summer",
    },
    {
        id: 3,
        name: "Ken",
        username: "x-man",
        comment: " Hi im Ken Carson",
    },
    {
        id: 4,
        name: "lone",
        username: "destroy lonely",
        comment: "if looks could kill",

    }

]

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send(users)
})

router.post('/', (req, res)=>{
    users.push(req.body)
})

module.exports = users
module.exports = router

