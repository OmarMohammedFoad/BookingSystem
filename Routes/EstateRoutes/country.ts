

import { Router } from 'express';
import CountryController from '../../Controller/EstateService/country';



const router = Router();


router.post('/create',CountryController.createCountry);
router.get('/all',CountryController.getAllCountries);
router.get('/:id',CountryController.getCountryById);

export default router;
