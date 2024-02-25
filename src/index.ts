import express from "express";
import { AppDataSource } from "./database/configdb";

import router from "./routes/router";

const app = express();
const PORT = process.env.PORT ?? 3000;

//app.use("/", router);
//docker rm -v -f $(docker ps -qa)
//docker rm -v -f $(docker images -qa)

//app.listen(PORT, () => console.log(`Server Started on PORT ${PORT} 🎉`));
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });