import  express  from "express";
import productRouters from "./routes/products/products.route.js";
import{PORT} from "./config.js";
const app=express();
app.use(express.json());


/*app.use((req,res,next)=>{
    res.status(404).json({
        message:'endpoint not found...'
    })
})*/
app.listen(PORT);
console.log('Puerto',PORT)
app.use(productRouters);