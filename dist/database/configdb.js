"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "165.232.179.163",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    synchronize: true,
    logging: true
});
