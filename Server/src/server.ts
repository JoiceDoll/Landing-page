import express from "express";
import cors from "cors";
import registerRouter from "./api/landingPageClient/controllers/RegisterController";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/register", registerRouter);

app.listen(process.env.LISTEN, () => {
  console.log(`Server running at ${process.env.LISTEN}.`);
});

export default app;
