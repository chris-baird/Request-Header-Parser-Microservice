const express = require("express")
const cors = require('cors');
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())

app.use(cors({ optionsSuccessStatus: 200 }));

app.use('/api/whoami', (req, res) => {
  let json = {
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  }
  res.json(json)
})

app.listen(PORT, () => console.log("APP listening on port " + PORT))