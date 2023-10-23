export const registerQuery = (nameData: string, emailData: string): string => {
  return `INSERT INTO designClients (name, email) VALUES ('${nameData}', '${emailData}')`;
};
