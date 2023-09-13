import { Request, Response } from "express";
import ClientRegister from "../services/RegisterService";

async function registerClient(req: Request, res: Response) {
  const { nameData, emailData } = req.body;
  try {
    await ClientRegister.account({ nameData, emailData });
    return res.status(200).json({ message: "Success!" });
  } catch (err) {
    return res.status(400).json({ message: "Error" });
  }
}

export default registerClient;
