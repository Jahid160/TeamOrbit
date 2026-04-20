import AdminDashboard from "@/components/Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "@/components/Dashboard/UserDashboard/UserDashboard";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const dashboard = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const userRole = session?.user?.role;
  if (userRole === "admin") {
    return <AdminDashboard />;
  } else if (userRole === "user") {
    return <UserDashboard />;
  } else if (userRole === "teamleader") {
    return <div>Team Leader Dashboard (Coming Soon)</div>;
  } else {
    return <div>Unauthorized - Invalid role</div>;
  }
};

export default dashboard;
