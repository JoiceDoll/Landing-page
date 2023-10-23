import { Request, Response } from "express";
import ClientRegister from "../services/RegisterService";

async function registerClient(req: Request, res: Response) {
  const { nameData, emailData } = req.body;
  try {
    const results = await ClientRegister.account({ nameData, emailData });
    return res.status(200).json({ message: results });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export default registerClient;
