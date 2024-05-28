import city from "../../Controller/EstateService/citeis";

import { Router } from 'express';



const router = Router();    

router.post('/create',city.createCity);
router.get('/all',city.getAllCities);
router.get('/:id',city.getCityById);

export default router;