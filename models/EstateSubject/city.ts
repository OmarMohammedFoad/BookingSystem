import { Model,DataTypes } from "sequelize";
import db from "../db";
import Country from "./country";
import Estate from "../estate";


class City extends Model {
    public city_name!:string;
    public city_description!: string;
}


City.init({
    city_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city_description:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{
    sequelize:db,
    tableName:"cities"
});

export default City;






Country.hasMany(City);
City.belongsTo(Country);



City.sync({alter:true}).then(()=>{
    console.log("City table created");
 }).catch((err:Error)=>{
    console.log(err);
} );   
