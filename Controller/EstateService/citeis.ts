import Cities from '../../models/EstateSubject/city';



class CityController {


    createCity = async (req:any,res:any)=>{
        try {
            const city = await Cities.create(req.body);
            res.status(201).send({message:"City created successfully",city});
        } catch (error) {
            console.log(error);
            
            res.status(500).send("Internal server error");
        }
    }

    getAllCities = async (req:any,res:any)=>{
        try {
            const cities = await Cities.findAll();
            if(cities.length === 0){
                return res.status(404).send("No city found");
            }
            res.status(200).send(cities);
        } catch (error) {
            console.log(error);
            
            res.status(500).send("Internal server error");
        }
    }


    getCityById = async (req:any,res:any)=>{
        try {
            const city = await Cities.findByPk(req.params.id);
            if(!city){
                return res.status(404).send("City not found");
            }
            res.status(200).send(city);
        } catch (error) {

            res.status(500).send("Internal server error");
        }
    }


}



export default new CityController();