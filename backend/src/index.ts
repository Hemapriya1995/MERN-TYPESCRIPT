import express, { Request, Response } from "express";
import { sampleProducts } from "./data";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { productRouter } from "./Routers/ProductRouter";
import { seedRouter } from "./Routers/SeedRouter";
const app = express();
const port = 5000;

dotenv.config();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/tsAmazon";
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("error mongodb");
  });

app.use("/api/products", productRouter);
app.use("/api/seed", seedRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port} `);
});
