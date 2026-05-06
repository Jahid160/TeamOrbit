// app/dashboard/user-management/page.tsx
import UserManagementClient from "@/components/Dashboard/AdminDashboard/UserManagementClient/UserManagementClient";
import { prisma } from "@/lib/prisma"; // আপনার প্রিজমা ক্লায়েন্ট পাথ অনুযায়ী

async function getUsers() {
  try {
    // PostgreSQL থেকে সব ইউজার নিয়ে আসা
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
      },
      orderBy: {
        createdAt: "desc", // নতুন ইউজাররা আগে থাকবে
      },
    });
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

export default async function UserManagementPage() {
  const users = await getUsers();

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">
            User Management
          </h1>
          <p className="text-sm text-slate-500">
            Manage all users and their permissions here.
          </p>
        </div>
      </div>

      {/* ক্লায়েন্ট কম্পোনেন্টে ডাটা পাস করা */}
      <UserManagementClient initialUsers={users} />
    </div>
  );
}
