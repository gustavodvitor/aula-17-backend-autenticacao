import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export class AuthController{

    async create(req: Request,res: Response)
    {
        
        try{
            const {email,senha} = req.body;

            const user = await authService.create(email,senha);

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

            res.cookie(
                "token",
                resposta.token,
                {
                    httpOnly: true,
                    secure: false,
                    sameSite: "lax",
                    maxAge: 1000 * 60 * 60 * 24,
                }
            )
            return res.json({
                success: true,
            });

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

    async logout(req: Request,res: Response)
    {
        res.clearCookie("token");

        return res.json({
            success: true,
        });
    }

}