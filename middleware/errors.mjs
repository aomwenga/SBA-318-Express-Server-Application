// page not found errors
import express from "express";

export const notFoundMiddleware = (req, res, next) => {
  res.status(404).send("Page not found");
};
