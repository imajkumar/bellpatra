import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "my_postgres",
    port:5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    synchronize: true,
    logging:true
  });