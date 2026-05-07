"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function deleteTaskAction(
  taskId: string,
): Promise<{ success: boolean; message: string; error?: string }> {
  try {
    await db.creatingTask.delete({
      where: { id: taskId },
    });
    revalidatePath("/tasks");
    return { success: true, message: "Deleted successfully" };
  } catch (err) {
    return { success: false, message: "Failed", error: "Details here" };
  }
}
