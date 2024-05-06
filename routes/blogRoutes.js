const express = require("express");
const blogController = require("../controllers/blogController");

// express router
const router = express.Router();

// blog home page
router.get("/", blogController.blog_index);

// create blog page
router.get("/create", blogController.blog_create_get);

// blog post
router.post("/", blogController.blog_create_post);

// blog details
router.get("/:id", blogController.blog_details);

// delete blog btn
router.delete("/:id", blogController.blog_delete);

module.exports = router;
