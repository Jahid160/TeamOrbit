import { Session } from "next-auth";

export const isAdmin = (session: Session | null) => {
  return session?.user?.role === "admin";
};

export const isTeamLeader = (session: Session | null) => {
  return session?.user?.role === "teamLeader";
};

export const isUser = (session: Session | null) => {
  return session?.user?.role === "user";
};
