import express from "express";
import router from "./routes/router";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use("/", router);
//docker rm -v -f $(docker ps -qa)
//docker rm -v -f $(docker images -qa)

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT} 🎉`));
