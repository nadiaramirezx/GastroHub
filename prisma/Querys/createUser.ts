import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createUser() {
  const usuario = await prisma.usuarios.create({
    data: {
      nombre: 'Marco Perez',
      email: 'mrco.perez@example.com',
      password: 'password123',
    },
  });
  console.log("usuario creado:",usuario);
}
export default createUser();
