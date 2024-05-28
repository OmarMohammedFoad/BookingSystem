import { Request, Response } from "express";
import EstateType from "../../models/EstateSubject/estateType";




class EstateTypeController {


    create = (req:Request,res:Response)=>
    {
        try {
            
            const type = EstateType.create(req.body);


            res.status(200).json({message:"types created",type})



        } catch (error) {
         res.status(500).json()   
        }
    }

    getAll = (req:Request,res:Response)=>{
        try {
            const types = EstateType.findAll();
            if(!types) res.status(404).json({message:"types not found"})
            res.status(200).json({types})
        } catch (error) {
            res.status(500).json()
        }
    }


    getOne = (req:Request,res:Response)=>{
        try {
            const type = EstateType.findOne({where:{id:req.params.id}});
            if(!type) res.status(404).json({message:"type not found"})
            res.status(200).json({type})
        } catch (error) {
            res.status(500).json()
        }
    }


    update = (req:Request,res:Response)=>{
        try {
            const type = EstateType.update(req.body,{where:{id:req.params.id}});
            if(!type) res.status(404).json({message:"type not found"})
            res.status(200).json({message:"type updated"})
        } catch (error) {
            res.status(500).json()
        }
    }

    delete = (req:Request,res:Response)=>{
        try {
            const type = EstateType.destroy({where:{id:req.params.id}});
            if(!type) res.status(404).json({message:"type not found"})
            res.status(200).json({message:"type deleted"})
        } catch (error) {
            res.status(500).json()
        }
    }

}


export default new EstateTypeController();