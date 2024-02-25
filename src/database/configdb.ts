import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "165.232.179.163",
    port:5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    synchronize: true,
    logging:true
  });