"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export type UpdateTaskResponse = {
  success: boolean;
  message: string;
  data?: any;
};

export const updateTaskAction = async (
  id: string,
  formData: {
    title: string;
    description: string;
    status: string;
    priority: string;
    deadline: string;
  },
): Promise<UpdateTaskResponse> => {
  try {
    const updatedTask = await db.creatingTask.update({
      where: {
        id: id,
      },
      data: {
        title: formData.title,
        description: formData.description,
        status: formData.status,
        priority: formData.priority,

        deadline: formData.deadline ? new Date(formData.deadline) : null,
      },
    });

    revalidatePath("/dashboard/admin/tasks");
    revalidatePath(`/dashboard/allTasks/${id}`);

    return {
      success: true,
      message: "Task updated successfully!",
      data: updatedTask,
    };
  } catch (error: any) {
    console.error("Prisma Update Error:", error);

    return {
      success: false,
      message: error.message || "Something went wrong while updating the task.",
    };
  }
};
