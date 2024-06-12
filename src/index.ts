import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from "./routes/MyUserRoute";

mongoose.connect(process.env.MONGODB_SEC as string).then(() => {
  console.log("DB Connection Successful!");
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({
    message: "Health OK!",
  });
});

app.use("/api/my/user", MyUserRoute);

app.listen(5000, () => {
  console.log("Server started successfully on localhost:5000!");
});
