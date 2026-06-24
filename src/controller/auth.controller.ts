import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export class AuthController{

    async create(req: Request,res: Response)
    {
        
        try{
            const {nome, email,senha} = req.body;

            const user = await authService.create(nome,email,senha);

            return res.json(user);
        } catch (error)
        {
            return res.status(400).json({
                message: 
                   error instanceof Error
                   ? error.message
                   : "Erro",
            });
        }
        
    }


    async login(req: Request,res: Response)
    {
        try {
            const {email, senha} = req.body;

            const resposta = await authService.login(email,senha);

            res.json(resposta);

        } catch (error)
        {
            return res.status(400).json({
                message: 
                   error instanceof Error
                   ? error.message
                   : "Erro",
            });
        }
    }

}