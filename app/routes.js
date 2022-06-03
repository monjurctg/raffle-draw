const router = require("express").Router();

// router.use("/api/v1/tickets", require("../routes/ticket"));

router.get("/health", (_req, res) => {
  res.status(200).json({ message: "Success" });
});

router.get("/", (req, res) => {
  res.json({ msg: "hello world" });
});

module.exports = router;
