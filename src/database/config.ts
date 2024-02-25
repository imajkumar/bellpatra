import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
dotenv.config();

const { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, NODE_ENV } = process.env;