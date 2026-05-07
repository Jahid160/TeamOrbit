// app/dashboard/layout.tsx (Server Component)
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import DashboardWrapper from "@/components/Dashboard/DashboardWrapper/DashboardWrapper";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // সার্ভার থেকে সেশন ডাটা নিন
  const session = await getServerSession(authOptions);

  // সেশন না থাকলে আগেই লগইন পেজে পাঠান
  if (!session) {
    redirect("/?loginTrigger=true");
  }

  // ক্লায়েন্ট র‍্যাপারকে সেশন এবং চিলড্রেন পাস করুন
  return (
    <DashboardWrapper role={session?.user?.role}>{children}</DashboardWrapper>
  );
}
