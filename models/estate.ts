import {Model,DataTypes } from "sequelize";

import db from "./db";
import EstateStatus from "./EstateSubject/estateStatus";
import EstateType from "./EstateSubject/estateType";
import City from "./EstateSubject/city";

class Estate extends Model {
    public  estateName!: string;
    // public estateTypeId!: number;
    // public cityId!: number;
    public floor_space!:number;
    public number_of_balconies!:number;
    public number_of_bedrooms!:number;
    public number_of_bathrooms!:number;
    public park_space!:number;
    public estate_description!:string;
    // public estate_status!:number;

}


Estate.init({
    estateName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    floor_space: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    number_of_balconies: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    number_of_bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    number_of_bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    park_space: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estate_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
   
}, {
    sequelize: db,
    tableName: "estates",
    timestamps: true
});


EstateType.hasMany(Estate);
Estate.belongsTo(EstateType);




EstateStatus.hasMany(Estate);
Estate.belongsTo(Estate);



City.hasMany(Estate);
Estate.belongsTo(City);
// City.belongsTo(Estate);





// City.hasOne(Estate)


// EstateStatus.belongsTo(Estate);
// EstateStatus.hasMany(Estate);
Estate.sync({alter: true}).then(() => console.log("Estate table created"));

export default Estate;