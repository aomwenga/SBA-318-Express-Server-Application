// req.method HTTP method used, and path
import express from "express";

export const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
