//import Pool from "mysql2/typings/mysql/lib/Pool.js";
import { pool } from "../setting/conex.js";

//list for products
export const getProducts =async(req,res)=>{
    try{
    const[lista]=await pool.query('SELECT *from productos');
    res.json(lista);
    console.log("coneccted database...");
    } catch(error){
        return res.status(500).json({
            message:'failed to connect database'
        })
           
    }
}

//list for id
export const getProductsid =async(req,res)=>{
    try{
const[rows]=await pool.query('SELECT *FROM productos WHERE idproducto=?',[req.params.id]);
if(rows.length<=0)return res.status(404).json({
    message:"Product not exist..."
})    
    console.log(rows);
    res.json(rows[0]);
}catch(error){
    return res.status(500).json({
        message:'failed to connect database'
    })    
    
   // console.log('failed to connect database :(');
}
}

//insert products
export const postProducts=async(req,res)=>{
   const {nombre,descripcion,valor}=req.body;
    const [rows]=await pool.query('INSERT INTO productos(nombre,descripcion,valor)VALUES(?,?,?)',[nombre,descripcion,valor]);
    res.send({
        idproducto:rows.insertId,
        nombre,
        descripcion,
        valor,
        });
 
}

//update products
export const  putProducts=async(req,res)=> {
 const{id}=req.params;
 const{nombre,descripcion,valor}=req.body;   
const [result]=await pool.query('UPDATE productos SET nombre= IFNULL(?,nombre),descripcion=IFNULL(?,descripcion),valor=IFNULL(?,valor) WHERE idproducto=?',[nombre,descripcion,valor,id]);
console.log(result);
if(result.affectedRows<=0) return res.status(404).json({
    message:'Product not update'
})
//res.json('update ok...');
// view record update
const[rows]=await pool.query('SELECT *FROM productos WHERE idproducto=?',[id]);
res.json(rows[0])
}

// delete for product
export const delProducts=async(req,res)=>{
    try{
    const [result]=await pool.query('DELETE FROM productos WHERE idproducto=?',[req.params.id]);
    if(result.affectedRows<=0) return res.status(404).json({
        message:'Product not found'
    })
    res.send('Record Delete...')
} catch(error){
    return res.status(500).json({
        message:'failed to connect database'
    })    
}  
       
        

}
