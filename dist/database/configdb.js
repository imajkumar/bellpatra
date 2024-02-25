"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "my_postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    synchronize: false,
    logging: false
});
