// imports
import express from "express";
import { loggerMiddleware } from "./middleware/logger.mjs";
import { notFoundMiddleware } from "./middleware/errors.mjs";
import { users } from "./data/users.mjs";
import { posts } from "./data/posts.mjs";
import { comments } from "./data/comments.mjs";

console.log(comments);

// initialize
const app = express();
const PORT = 3000;

// middleware
app.use(loggerMiddleware);
app.use(notFoundMiddleware);

// listener
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}.`);
});
