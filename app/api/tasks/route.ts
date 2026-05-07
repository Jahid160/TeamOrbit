import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/db";
import { isAdmin } from "@/lib/utils/roleCheck";

// export async function POST(req: Request) {
//   try {
//     // 1. Authenticate and check for Admin role
//     const session = await getServerSession(authOptions);

//     if (!isAdmin(session)) {
//       return new NextResponse("Unauthorized", { status: 403 });
//     }

//     const body = await req.json();
//     const { title, description, priority, deadline, image } = body;

//     // 2. Validation
//     if (!title) {
//       return new NextResponse("Title is required", { status: 400 });
//     }

//     // 3. Prepare Prisma Data
//     const dataToCreate: Prisma.CreatingTaskUncheckedCreateInput = {
//       title,
//       description: description || null,
//       priority: priority || "medium",
//       image: image || null,
//       userId: session.user.id,
//     };

//     // 4. Handle Date
//     if (deadline) {
//       const parsed = new Date(deadline);
//       if (!isNaN(parsed.getTime())) {
//         dataToCreate.deadline = parsed;
//       }
//     }

//     const userExists = await db.user.findUnique({
//       where: { id: session.user.id },
//     });

//     if (!userExists) {
//       return new NextResponse(
//         JSON.stringify({
//           error:
//             "User associated with this session no longer exists. Please re-login.",
//         }),
//         { status: 401 },
//       );
//     }

//     // 5. Database Save
//     const newTask = await db.creatingTask.create({
//       data: dataToCreate,
//     });

//     return NextResponse.json(newTask);
//   } catch (error) {
//     console.error("[TASK_CREATE_ERROR]", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !isAdmin(session)) {
      return new NextResponse("Unauthorized", { status: 403 });
    }
    const tasks = await prisma.creatingTask.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch tasks" },
      { status: 500 },
    );
  }
}
