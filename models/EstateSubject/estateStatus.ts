import { Model,DataTypes } from "sequelize";
import db from "../db";
import Estate from "../estate";




class EstateStatus extends Model {
    public status_name!:string;

}

EstateStatus.init({
    status_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    tableName:"estate_status"
});


// EstateStatus.hasMany(Estate);
// Estate.belongsTo(EstateStatus);

EstateStatus.sync({alter:true}).then(()=>{
    console.log("EstateStatus table created");
}).catch((err:Error)=>{});
export default EstateStatus;