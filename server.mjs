// imports
import express from "express";
import { loggerMiddleware } from "./middleware/logger.mjs";
import { notFoundMiddleware } from "./middleware/errors.mjs";
import userRoute from "./routes/userRoute.mjs";
import postRoute from "./routes/postRoute.mjs";
import commentRoute from "./routes/commentRoute.mjs";

// initialize
const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

app.use(loggerMiddleware);

// routes
app.use("/users", userRoute);
app.use("/posts", postRoute);
app.use("/comments", commentRoute);

// catch page not found error middleware
app.use(notFoundMiddleware);

// listener
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}.`);
});
