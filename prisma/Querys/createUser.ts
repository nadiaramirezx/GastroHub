import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createUser = async() => {
  const usuario = await prisma.usuarios.create({
    data: {
      nombre: 'Leana Deeb',
      email: 'lean.d@example.com',
      password: 'password123',
      foto_perfil: 'https://www.pexels.com/es-es/foto/mujer-vestida-con-chaqueta-de-traje-de-solapa-chal-azul-1036622/',
    },
  });
  console.log("usuario creado:",usuario);
  return usuario; //le regresa el usuario creado//
}

