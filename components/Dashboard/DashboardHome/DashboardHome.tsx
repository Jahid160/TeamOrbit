"use client";
import { useSession } from "next-auth/react";
import React from "react";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import UserDashboard from "../UserDashboard/UserDashboard";

const DashboardHome = () => {
  const { data: session, status } = useSession();
  const userRole = session?.user?.role;
  console.log(userRole);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }
  if (userRole === "admin") {
    return <AdminDashboard />;
  } else if (userRole === "user") {
    return <UserDashboard />;
  } else {
    return <div>Unauthorized</div>;
  }
};

export default DashboardHome;
