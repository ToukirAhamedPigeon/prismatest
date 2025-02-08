
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  try {
    const users = await prisma.user.findMany();
    return { success: true, data: users };
  } catch (error) {
    return { success: false, message: "Internal Server Error" };
  }
});
