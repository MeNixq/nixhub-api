require('dotenv').config();
const express = require("express")
const app = express()

require("./routes")(app)

app.get("/", (req, res) => {
  res.send("Home page")
})

app.listen(process.env.PORT, () => {
  console.log("🎊 Api is running")
});