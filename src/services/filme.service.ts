import { prisma } from "../prisma/client";

export class FilmeService{

    async create(dados: {titulo: string; nota: number; imagem: string;}, userId: number)
    {
        await prisma.filme.create({
            data:{
                ...dados,
                userId,
            },
        });
    }

    async delete(id: number, userId: number)
    {
        const filme = await prisma.filme.findFirst({
            where: {
                id,
                userId,
            },
        });

        if (!filme) {
            throw new Error(
                "Filme não encontrado"
            );
        }

        await prisma.filme.delete({
            where: {
                id,
            },
        });
    }

    async findAll(userId: number)
    {
        return await prisma.filme.findMany({
            where: {
                userId
            }
        });
    }

    async findById(id: number, userId: number)
    {
        return await prisma.filme.findUnique({
            where: {id}
        });
    }

    async update(id:number, userId: number, dados: {titulo: string; nota: number; imagem: string; })
    {

        const filme = await prisma.filme.findFirst({
                where: {
                    id,
                    userId,
                },
            });

            if (!filme) {
                throw new Error(
                    "Filme não encontrado"
            );
        }

        await prisma.filme.update({
            where:{
                id,
            },
            data: dados,
        });
    }

}