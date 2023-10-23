import express from "express";
import cors from "cors";
import registerRouter from "./api/landingPageClient/controllers/RegisterController";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/register", registerRouter);

export default app;
