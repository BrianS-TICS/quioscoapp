
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const producto = await prisma.producto.findMany();

    res.status(200).json(producto)
}
