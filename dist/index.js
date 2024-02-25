"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const configdb_1 = require("./database/configdb");
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
//app.use("/", router);
//docker rm -v -f $(docker ps -qa)
//docker rm -v -f $(docker images -qa)
//app.listen(PORT, () => console.log(`Server Started on PORT ${PORT} 🎉`));
configdb_1.AppDataSource.initialize()
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
