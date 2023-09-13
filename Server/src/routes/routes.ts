import app from "../server";
import { Router } from "express";
import registerClient from "../api/landingPageClient/controllers/RegisterController"

const registerRouter = Router();


app.use(registerRouter);
// app.use(selectRouter);

registerRouter.post("/register", registerClient);
// selectRouter.get("/auth", verifyAccount);

export default {registerRouter}
