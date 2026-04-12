import UserManagementClient from "@/components/Dashboard/AdminDashboard/UserManagementClient/UserManagementClient";

async function getUsers() {
  return [
    {
      id: "1",
      name: "Md Zahid Hasan",
      email: "zahid@example.com",
      role: "admin",
      status: "active",
    },
    {
      id: "2",
      name: "Anisur Rahman",
      email: "anis@example.com",
      role: "user",
      status: "active",
    },
    {
      id: "3",
      name: "Sara Jenkins",
      email: "sara@example.com",
      role: "teamleader",
      status: "inactive",
    },
  ];
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

      <UserManagementClient initialUsers={users} />
    </div>
  );
}
