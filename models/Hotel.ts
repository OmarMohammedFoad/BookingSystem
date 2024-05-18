import { Model,DataType, DataTypes } from "sequelize";
import db from "./db"


class Hotel extends Model {
  public name!: string;
  public description!: string;
  public location!: string;
 public image!:string; 
}

Hotel.init({

name:{
    type:DataTypes.STRING
},
description:{
    type:DataTypes.STRING
},

location:{
    type:DataTypes.STRING
},

image:{
    type:DataTypes.STRING
},


},{sequelize:db,modelName:"Hotel"})

export default Hotel

console.log(Hotel == db.models.Hotel);
