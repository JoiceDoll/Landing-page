import "dotenv/config";
import app from "./app";

app.listen(process.env.LISTEN, () => {
  console.log(`Server running at ${process.env.LISTEN}.`);
});
