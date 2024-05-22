"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface createUserProps {
  userId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  profilePicture: string | null;
}

export const createUser = async (data: createUserProps) => {
  try {
    if (!data.userId || !data.email) {
      throw new Error("Missing required fields");
    }
    if ( await prisma.user.findUnique({ where: { userId: data.userId } }) ) {
      return "User already exists";
    }

    const user = await prisma.user.create({
      data: {
        userId: data.userId,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        profilePicture: data.profilePicture,
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    return error;
  }
};
