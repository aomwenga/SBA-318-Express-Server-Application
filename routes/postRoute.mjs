import express from "express";
import { posts } from "../data/posts.mjs";

const router = express.Router();

// get
router.get("/", (req, res) => {
  res.json(posts);
});
// get post only by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.json(post);
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

// delete posts by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const postIndex = posts.findIndex((post) => post.id === parseInt(id));
  if (postIndex === -1) {
    return res.status(404).send("Post not found");
  }

  posts.splice(postIndex, 1);
  res.status(204).send(); // 204 No Content
});

export default router;
