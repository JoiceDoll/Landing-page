import db from "../../../config/database";
import { ICreateAccount } from "./types";

class ClientRegister {
  async account({ nameData, emailData }: ICreateAccount) {
    try {
      await db.connect();
      await db.query(
        `INSERT INTO designClients (name, email) VALUES ('${nameData}', '${emailData}')`
      );
      await db.end();
    } catch (err) {
      return err;
    }
  }
}

export default new ClientRegister();
