import { Model,DataTypes } from "sequelize";
import db from "./db";
import Estate from "./estate";
import Incharge from "./EstateSubject/incharge";


class Employee extends Model {
    public name!:string;
    public email!:string;
    public password!:string;
    public role!:string;
    public phone!:string;
    public address!:string;
}



Employee.init({
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:db,
    modelName:"Employee"
});

Employee.hasMany(Incharge);
Incharge.belongsTo(Employee);
export default Employee;