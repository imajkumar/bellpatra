require("dotenv").config();
import express from "express";
import { AppDataSource } from "./database/configdb";

import indexRouter from "./routes/index"

const PORT = process.env.PORT ?? 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    console.log("Data Source has been initialized!");
    const app = express();
    // built-in middleware to handle urlencoded form data
    app.use(express.urlencoded({ extended: false }));
    // built-in middleware for json

    app.use(express.json({ limit: "10kb" }));
    //middleware for cookies
     //Route Prefixes
     app.use("/", indexRouter);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err:any) => {
    console.log(err);
    process.exit(1);
  });