import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import cors from "cors";
import corsMiddleware from "./middlewares/corsMiddleware.js";

const app = express();
const PORT = process.env.Port || 3000;

// Database Connection
await connectDB();

dotenv.config();

app.use(express.json());
app.use(corsMiddleware);

app.get("/", (req, res) => res.send("Server is live..."));
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
