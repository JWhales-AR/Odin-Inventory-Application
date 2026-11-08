import "dotenv/config";
import express from "express";
import path from "node:path";

import indexRouter from "./routes/indexRouter.ts";

const PORT = process.env.PORT ?? 8080;
const __dirname = import.meta.dirname;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error occurred while starting Express");
    console.log(error);
  }
  console.log(`Express listening on port ${PORT}`);
});
