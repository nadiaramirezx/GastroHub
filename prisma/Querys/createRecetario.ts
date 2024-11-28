import { PrismaClient } from "@prisma/client";
import {createUser} from "./createUser";

const prisma = new PrismaClient();

export const createRecetario = async () => {
   const usuario = await createUser();

   const recetario = await prisma.recetario.create({
      data: {
         nombre: "Unidad uno",
         descripcion: "Categorias vistas como postres y bar",
         usuario_id: usuario.id_usuario,
      },
   });

   console.log("Recetario creado:",recetario)
   return recetario;
}

