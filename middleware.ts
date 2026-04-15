import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const ROLE_PERMISSIONS: Record<string, string[]> = {
  user: [
    "/dashboard/my-tasks",
    "/dashboard/my-stats",
    "/dashboard/team-list",
    "/dashboard/projects",
  ],
  teamleader: [
    "/dashboard/team",
    "/dashboard/projects",
    "/dashboard/tasks",
    "/dashboard/admin-tasks",
  ],
  admin: [
    "/dashboard/user-management",
    "/dashboard/teamLeaders",
    "/dashboard/projects",
    "/dashboard/admin-tasks",
    "/dashboard/analytics",
  ],
};

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  const isAuthenticated = Boolean(token);
  const userRole: string | undefined = (token?.role as string)?.toLowerCase();
  console.log(userRole);
  // Protect main dashboard route
  if (pathname.startsWith("/dashboard")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${pathname}`, req.url),
      );
    }
  }

  const privateRoutes = Object.values(ROLE_PERMISSIONS).flat();
  const isPrivateRoute = privateRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isPrivateRoute) {
    if (!isAuthenticated) {
      return NextResponse.redirect(
        new URL(`/?loginTrigger=true&callbackUrl=${pathname}`, req.url),
      );
    }

    const allowedRoutes: string[] = ROLE_PERMISSIONS[userRole] || [];
    const hasPermission: boolean = allowedRoutes.some((route) =>
      pathname.startsWith(route),
    );

    if (!hasPermission) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // matcher: ["/dashboard/:path*"],
};
