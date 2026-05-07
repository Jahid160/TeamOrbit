export const dynamic = "force-dynamic";
import TaskListClient from "@/components/Dashboard/AdminDashboard/adminTasks/TaskListClient";
import { db } from "@/lib/db";
import { Suspense } from "react";

const TasksPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams?.page) || 1;
  const limit = 6;
  const skip = (page - 1) * limit;

  const tasks = await db.creatingTask.findMany({
    skip: skip,
    take: limit,
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      description: true,
      status: true,
      priority: true,
      deadline: true,
      user: { select: { name: true, image: true } },
    },
  });
  const totalTasks = await db.creatingTask.count();
  const totalPages = Math.ceil(totalTasks / limit);
  return (
    <Suspense fallback={<div>Loading tasks...</div>}>
      <TaskListClient
        key={JSON.stringify(searchParams)}
        initialTasks={tasks}
        totalPages={totalPages}
        currentPage={page}
      />
    </Suspense>
  );
};

export default TasksPage;
