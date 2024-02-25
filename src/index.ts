require("dotenv").config();
import express, { NextFunction,Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import { corsOptions } from "./utils/corsOptions";

import { AppDataSource } from "./database/configdb";
import validateEnv from "./utils/validateEnv";

import indexRouter from "./routes/index"

const PORT = process.env.PORT ?? 3000;

AppDataSource.initialize()
  .then(() => {
      // VALIDATE ENV
      validateEnv();
      console.log("Data Source has been initialized!");
      const app = express();
      // 2. Logger
      if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
  
      // Cross Origin Resource Sharing
      app.use(cors(corsOptions));
  
      // built-in middleware to handle urlencoded form data
      app.use(express.urlencoded({ extended: false }));
      // built-in middleware for json
  
      app.use(express.json({ limit: "10kb" }));
      //middleware for cookies

   
    //middleware for cookies
    app.use(cookieParser());

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