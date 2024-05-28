import Estate from "../models/estate";



export default class EstateController {
    createEstate = async (req: any, res: any) => {
        try {
            const estate = await Estate.create(req.body);
            if(!estate) return res.status(400).json("Estate not created");
            res.status(201).json(estate);
        } catch (error) {
            console.log(error, "error");

            res.status(500).json(error);
        }

    };

    getEstate = async (req: any, res: any) => {
        try {
            const estate = await Estate.findAll();
            if(!estate) return res.status(404).json("Estate not found");
            res.status(200).json(estate);
        } catch (error) {
            console.log(error, "error");
            
            res.status(500).json(error);
        }
    };

    getOneEstate = async (req: any, res: any) => {
        try {
            const estate = await Estate.findByPk(req.params.id);
            if(!estate) return res.status(404).json("Estate not found");
            res.status(200).json(estate);
        } catch (error) {
            res.status(500).json(error);
        }
    };


    updateEstate = async (req: any, res: any) => {
        try {
            const estate = await Estate.findByPk(req.params.id);
            if(!estate) return res.status(404).json("Estate not found");
            await estate.update(req.body);
            res.status(200).json(estate);
        } catch (error) {
            res.status(500).json(error);
        }
    };


}

export const estateController = new EstateController();
