import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/databaseConnection.js";
import path from "path";
import cors from "cors";
const app = express();

import reservationRoutes from "./routes/reservationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// cors
app.use(cors());

dotenv.config();
connectDb();

app.use(express.json());

app.use("/api/reservation", reservationRoutes);
app.use("/api/users", userRoutes);
app.use("/api/rooms", roomRoutes);

// --------------------------deployment------------------------------
const __dirname = path.resolve();

app.get("/", (req, res) => {
  res.send("API is running...");
});

//Error handling middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
