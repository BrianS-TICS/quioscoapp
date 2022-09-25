import React from 'react'
import { PrismaClient } from '@prisma/client'

export default async function hanlder(request, response) {
    const prisma = new PrismaClient();

    if (request.method === "POST") {
        const orden = await prisma.orden.create({
            data: {
                nombre: request.body.nombre,
                total: request.body.total,
                pedido: request.body.pedido,
                fecha: request.body.fecha
            }
        })
        response.json(orden)
    } else {
        response.json({ hola: "mundo" })
    }

}
