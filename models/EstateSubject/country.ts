import { Model,DataTypes } from "sequelize";
import City from "./city";
import db from "../db";



class Country extends Model {
    public country_name!:string;
}


Country.init({
    country_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    tableName:"countries"
});




Country.sync({alter:true}).then(()=>{
    console.log("Country table created");
}).catch((err:Error)=>{
    console.log(err);
});




export default Country;
