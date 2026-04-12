import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

const ROLE_PERMISSIONS: Record<string, string[]> = {
  user: ["/dashboard/my-tasks"],
  teamLeader: ["/dashboard/team", "/dashboard/projects"],
  admin: ["/dashboard/user-management", "/dashboard/teamLeaders"],
};

export async function proxy(req: NextRequest): Promise<NextResponse> {
  const token = await getToken({ req });
  const { pathname } = req.nextUrl;

  const isAuthenticated = Boolean(token);
  const userRole: string | undefined = token?.role;

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
  matcher: [
    "/dashboard/projects/:path*",
    "/dashboard/team/:path*",
    "/dashboard/my-tasks/:path*",
    "/dashboard/teamLeaders/:path*",
    "/dashboard/user-management/:path*",
  ],
};
