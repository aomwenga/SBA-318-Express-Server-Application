// imports
import express from "express";
import { loggerMiddleware } from "./middleware/logger.mjs";
import { notFoundMiddleware } from "./middleware/errors.mjs";

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
