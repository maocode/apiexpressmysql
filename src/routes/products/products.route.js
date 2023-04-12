import { Router } from "express";

// we import the controllers importamos los controladores
//import {getProducts,delProducts,getProductsid} from "../../controllers/products.controllers.js";
import {getProducts,getProductsid,postProducts,delProducts,putProducts} from "../../controllers/products.controllers.js"
const router=Router();

// files paths rutas de los archivos

// list of the products
router.get('/listproducts',getProducts);
router.get('/listproducts/:id',getProductsid);

// insert products
router.post('/newproducts',postProducts);
 
// update products
 router.patch('/upproducts/:id',putProducts);
 
 // delete products
 router.delete('/delproducts/:id',delProducts);


export default router;