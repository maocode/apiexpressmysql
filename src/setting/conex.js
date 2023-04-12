import { createPool } from "mysql2/promise";

export const pool=createPool({
    host:"localhost",
    user:"maocode",
    password:"maocode",
    port:3306,
    database:"tiendamascotas"
})