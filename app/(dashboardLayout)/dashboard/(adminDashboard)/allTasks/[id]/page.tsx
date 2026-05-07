// app/dashboard/admin/tasks/[id]/page.tsx
import { db } from "@/lib/db";
import TaskEditForm from "@/components/Dashboard/AdminDashboard/adminTasks/TaskEditForm";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const TaskEditPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  console.log(id);

  const task = await db.creatingTask.findUnique({
    where: { id: id },
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
      priority: true,
      deadline: true,
    },
  });

  if (!task) {
    notFound();
  }

  return (
    <Suspense fallback={<div>Loading task details...</div>}>
      <TaskEditForm initialData={task} />
    </Suspense>
  );
};

export default TaskEditPage;
