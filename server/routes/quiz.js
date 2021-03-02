const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.json("hai")
})

module.exports = router
