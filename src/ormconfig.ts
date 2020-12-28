import { ConnectionOptions } from "typeorm";
import { parse } from "pg-connection-string";

const dbOptions = parse(process.env.DATABASE_URL ?? "");

export const options: ConnectionOptions = {
    host: dbOptions.host ?? "localhost",
    type: "mysql",
    port: parseInt(dbOptions.port ?? "3307"),
    username: dbOptions.user,
    password: dbOptions.password,
    database: dbOptions.database ?? "default",
    entities: [],
    synchronize: true,
};