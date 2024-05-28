import { Model,DataTypes } from "sequelize";
import db from "../db";
import Estate from "../estate";


class EstateType extends Model {
    public type_name!:string;


}                               


EstateType.init({
    type_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    tableName:"estate_types"
});



EstateType.sync({alter:true}).then(()=>{
    console.log("EstateType table created");
}).catch((err:Error)=>{});   

export default EstateType;
