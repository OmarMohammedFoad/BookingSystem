import Country from "../../models/EstateSubject/country";


 class CountryController {


        createCountry = async (req:any,res:any)=>{  

            try {

              const countries =   await Country.create(req.body);

                res.status(201).send({message:"Country created successfully",countries});


            } catch (error) {
                console.log(error);
                
                
                res.status(500).send("Internal server error");
            }

        }


        getAllCountries = async (req:any,res:any)=>{

            try {

                const countries = await Country.findAll();
                if(countries.length === 0){
                    return res.status(404).send("No country found");
                }
                res.status(200).send(countries);

            } catch (error) {
                res.status(500).send("Internal server error");
            }

        }

        getCountryById = async (req:any,res:any)=>{

            try {

                const country = await Country.findByPk(req.params.id);
                if(!country){
                    return res.status(404).send("Country not found");
                }
                res.status(200).send(country);

            } catch (error) {
                res.status(500).send("Internal server error");
            }

        }


 }


    export default new CountryController(); 