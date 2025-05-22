const express = require("express");
const { getAnswer } = require("../controllers/geminiController");

const router = express.Router();

router.post("/ask", getAnswer);

module.exports = router;
