import incharge from "../../Controller/EstateService/incharge";
import { Router } from "express";

const router = Router();



router.post("/create",incharge.create);
router.get("/",incharge.getAll);
router.get("/:id",incharge.getOne);
router.delete("/:id",incharge.delete);
router.put("/:id",incharge.update);

export default router;

