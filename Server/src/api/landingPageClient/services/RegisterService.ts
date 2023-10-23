import db from "../../../config/database";
import { ICreateAccount } from "./types";
import { registerQuery } from "../queries";

class ClientRegister {
  async account({ nameData, emailData }: ICreateAccount) {
    try {
      const query = registerQuery(nameData, emailData);
      await db.query(query);
      return "Successfully registered!";
    } catch (error) {
      return error;
    }
  }
}

export default new ClientRegister();
