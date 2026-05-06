"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteTaskAction(taskId: string) {
  try {
    await db.creatingTask.delete({
      where: { id: taskId },
    });
    revalidatePath("/tasks");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete" };
  }
}
