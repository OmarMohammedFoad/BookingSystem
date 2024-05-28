import { Request, Response } from "express";
import InCharge from "../../models/EstateSubject/incharge";




class InChargeController {


    create = (req:Request,res:Response)=>
    {
        try {
            
            const incharge = InCharge.create(req.body);


            res.status(200).json({message:"incharges created",incharge})



        } catch (error) {
         res.status(500).json()   
        }
    }

    getAll = (req:Request,res:Response)=>{
        try {
            const inCharge = InCharge.findAll();
            if(!inCharge) res.status(404).json({message:"inCharge not found"})
            res.status(200).json({inCharge})
        } catch (error) {
            res.status(500).json()
        }
    }


    getOne = (req:Request,res:Response)=>{
        try {
            const type = InCharge.findOne({where:{id:req.params.id}});
            if(!type) res.status(404).json({message:"type not found"})
            res.status(200).json({type})
        } catch (error) {
            res.status(500).json()
        }
    }


    update = (req:Request,res:Response)=>{
        try {
            const incharge = InCharge.update(req.body,{where:{id:req.params.id}});
            if(!incharge) res.status(404).json({message:"incharge not found"})
            res.status(200).json({message:"incharge updated"})
        } catch (error) {
            res.status(500).json()
        }
    }

    delete = (req:Request,res:Response)=>{
        try {
            const inCharge = InCharge.destroy({where:{id:req.params.id}});
            if(!inCharge) res.status(404).json({message:"inCharge not found"})
            res.status(200).json({message:"inCharge deleted"})
        } catch (error) {
            res.status(500).json()
        }
    }

}


export default new InChargeController();