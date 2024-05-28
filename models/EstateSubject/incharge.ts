import { Model,DataTypes } from "sequelize";
import db from "../db";
import Estate from "../estate";



class Incharge extends Model {
   public dateFrom!:Date;
   public dateTo!:Date;
}


Incharge.init({
    dateFrom:{
        type:DataTypes.DATE,
        allowNull:false
    },
    dateTo:{
        type:DataTypes.DATE,
        allowNull:false
    }
},{
    sequelize:db,
    tableName:"incharge"
});



export default Incharge;
// Incharge.sync({alter:true}).then(()=>{
//     console.log("Incharge table created");
// }).catch((err:Error)=>{
//     console.log(err);
// });