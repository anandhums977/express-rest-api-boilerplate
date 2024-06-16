import { DataSource } from "typeorm"


export const myDataSource = new DataSource({
    type: "mysql",
    host: "mysql-test-anandhu3763766-c214.d.aivencloud.com",
    port: 25761,
    username: "avnadmin",
    password: "AVNS_OI3oOJVOY81WO8GotWY",
    database: "defaultdb",
    entities: [__dirname + "/entity/*.ts"],
    logging: false,
    synchronize: true,
})