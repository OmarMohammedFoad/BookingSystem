import estateTypes from "../../Controller/EstateService/estateTypes";





import { Router } from "express";



const router = Router();

router.post("/create",estateTypes.create);
router.get("/",estateTypes.getAll);
router.get("/:id",estateTypes.getOne);
router.delete("/:id",estateTypes.delete);
router.put("/:id",estateTypes.update);

export default router;

