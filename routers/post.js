const express = require("express");
const router = express.Router()

const postController = require("../controllers/postController.js");


// Index
router.get("/", postController.index);