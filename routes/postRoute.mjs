import express from "express";
import { posts } from "../data/posts.mjs";

const router = express.Router();

// get
router.get("/", (req, res) => {
  res.json(posts);
});

// post route
router.post("/", (req, res) => {
  const { userId, content } = req.body;
  if (!userId || !content) {
    // not enough info
    return res.status(400).send("userId and content are required");
  }
  // adding to posts
  const newPost = {
    id: posts.length + 1,
    userId,
    content,
  };
  posts.push(newPost);
  // good completed status
  res.status(201).json(newPost);
});

// patch route for updating a post
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  // find the post by id
  const post = posts.find((post) => post.id === parseInt(id));
  if (!post) {
    return res.status(404).send("Post not found");
  }

  if (content) {
    post.content = content;
  }

  res.json(post);
});

export default router;
