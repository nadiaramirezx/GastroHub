import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategoria = async () => {
  const categoria = await prisma.categoria.create({
    data: {
      nombre: "Postres",
    },
  });

  console.log("Categoría creada:", categoria);
  return categoria;
};
