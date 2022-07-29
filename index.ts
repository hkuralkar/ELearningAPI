import express,{Express,Request,Response} from "express";

import dotenv from "dotenv";

dotenv.config();

const app:Express = express();

const PORT = process.env.PORT;


app.get("/",(req:Request, res:Response)=>{
    res.send("Hello Typed Script: Hemant");
});

app.listen(PORT,()=>{
    console.log(`Server is running at: ${PORT}`);
    
})