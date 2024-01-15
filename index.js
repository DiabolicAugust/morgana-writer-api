import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Strings } from "./data/strings.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    app.listen(PORT, () => console.log(Strings.general.serverStart));
  } catch (error) {
    console.log(error);
  }
};

start();
