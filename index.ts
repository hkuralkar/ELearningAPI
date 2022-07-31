import express,{Express,Request,Response} from "express";

import dotenv from "dotenv";

import {sequelize} from "./sequalize"
import { user } from "./models/user";



dotenv.config();



const app:Express = express();

const PORT = process.env.PORT || 3001;



sequelize.sync({alter:true})



app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",async (req:Request, res:Response)=>{
    try {
        const User = await user.findAll();
        res.status(201).json(User)

        
    } catch (error) {
        res.status(501).json(error);
        
    }
});


app.get("/:id",async (req:Request, res:Response)=>{
    try {
        const User = await user.findAll({where:{id: req.params.id}});
        res.status(201).json(User)

        
    } catch (error) {
        res.status(501).json(error);
        
    }
});

app.post("/",async (req:Request, res: Response)=>{
    


    try {
        const User = await user.create(req.body);
        res.status(201).json(User)

        
    } catch (error) {
        res.status(501).json(error);
        
    }
    
    

})


app.post("/login",(req: Request, res: Response)=>{
    try {
        const User = user.findOne({where:{email: req.body.email}});
        console.log(User);
        
       let result =  User.verifyPassword()
       res.status(201).json(result)

        
    } catch (error) {
        res.status(501).json(error);
        
    }
})


app.delete("/:id",async (req: Request, res: Response)=>{

    try {
        const User = await user.destroy({where:{id:req.params.id}})
        res.status(201).json(User)

        
    } catch (error) {

        res.status(500).json(error)
        
    }

})


app.put("/:id",async (req: Request, res: Response)=>{
    try {

        const User = await user.update(req.body,{where:{id:req.params.id}, individualHooks: true})
        res.status(201).json(User)
        
    } catch (error) {

        res.status(500).json(error)
        
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running at: ${PORT}`);
    
})