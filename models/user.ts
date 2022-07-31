import {Table, Column, Model,HasMany, Default, DefaultScope, BeforeCreate, BeforeUpdate} from "sequelize-typescript"

const bcrypt = require("bcryptjs")

@DefaultScope(()=>({
    attributes:["id","name","email","password","salt"]
}))

@Table
export class user extends Model{




@Column
name: string

@Column
email: string

@Column
password: string

@Column
salt: string



@BeforeCreate
@BeforeUpdate
static encryptPassword(instance: user){
    instance.salt = bcrypt.genSaltSync(10);
    instance.password = bcrypt.hashSync(instance.password,instance.salt)
}











}

