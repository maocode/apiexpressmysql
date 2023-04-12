import { createPool } from "mysql2/promise";

export const pool=createPool({
    host:"containers-us-west-185.railway.app",
    user:"root",
    password:"YgWKH2gu2UaR1PNI4pcU",
    port:5741,
    database:"railway"
})
