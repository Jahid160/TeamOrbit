import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

// middleware.ts

const ROLE_PERMISSIONS: Record<string, string[]> = {
  user: [
    "/dashboard/my-tasks",
    "/dashboard/my-stats",
    "/dashboard/team-list",
    "/dashboard/projects",
    "/dashboard/profile",
    "/dashboard/settings",
  ],
  teamleader: [
    "/dashboard/team",
    "/dashboard/projects",
    "/dashboard/tasks",
    "/dashboard/profile",
    "/dashboard/settings",
  ],
  admin: [
    "/dashboard/user-management",
    "/dashboard/teamLeaders",
    "/dashboard/projects",
    "/dashboard/admin-tasks",
    "/dashboard/analytics",
    "/dashboard/team-management", // এটি অ্যাড করলাম
    "/dashboard/add-task", // আপনার সাইডবারে এটিও ছিল
    "/dashboard/profile",
    "/dashboard/settings",
  ],
};

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  const isAuthenticated = Boolean(token);
  const userRole: string | undefined = (token?.role as string)?.toLowerCase();

  // (Dashboard Route Protection)
  if (pathname.startsWith("/dashboard")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${pathname}`, req.url),
      );
    }

    //
    if (pathname === "/dashboard") return NextResponse.next();

    //
    const allowedRoutes: string[] = ROLE_PERMISSIONS[userRole || ""] || [];
    const hasPermission: boolean = allowedRoutes.some((route) =>
      pathname.startsWith(route),
    );

    if (!hasPermission) {
      // Unauthorized access - redirect to dashboard home or show an error page
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  //Matcher
  matcher: ["/dashboard/:path*"],
};
