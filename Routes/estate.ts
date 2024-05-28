import {estateController} from "../Controller/estate";
import { Router } from "express";


const router = Router();

router.post("/create",estateController.createEstate);
router.get("/",estateController.getEstate);
router.get("/:id",estateController.getOneEstate);
router.put("/:id",estateController.updateEstate);

export default router;