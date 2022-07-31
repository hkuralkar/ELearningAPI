import path from "path";
import { Sequelize } from "sequelize-typescript";

export const sequelize = new Sequelize({
    dialect:"sqlite",
    // database:"hello",
    storage: path.join(__dirname,"..","database.test.sqlite"),
    models:[__dirname+"/models"]

});