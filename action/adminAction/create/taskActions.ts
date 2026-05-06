"use server";

import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { isAdmin } from "@/lib/utils/roleCheck";
import { revalidatePath } from "next/cache";

export async function createTaskAction(formData: {
  title: string;
  description?: string;
  priority: string;
  deadline?: string;
  image?: string;
}) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return { success: false, error: "You must be logged in." };
    }

    if (!isAdmin(session)) {
      return { success: false, error: "Permission denied." };
    }

    const userInDb = await db.user.findUnique({
      where: { id: session.user.id },
    });

    if (!userInDb) {
      return {
        success: false,
        error: "User not found in database. Please log out and log in again.",
      };
    }

    const newTask = await db.creatingTask.create({
      data: {
        title: formData.title,
        description: formData.description || null,
        priority: formData.priority || "medium",
        image: formData.image || null,
        userId: session.user.id,
        deadline: formData.deadline ? new Date(formData.deadline) : null,
      },
    });

    revalidatePath("/tasks");
    return { success: true, data: newTask };
  } catch (error) {
    console.error("PostgreSQL Insert Error:", error);
    return {
      success: false,
      error: "Failed to create task due to database error.",
    };
  }
}
