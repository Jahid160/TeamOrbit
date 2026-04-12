import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // 1. Basic validation for required fields
    if (!name || !email || !password) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // 2. Check if the user already exists in the database
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists. Please use another one." },
        { status: 400 },
      );
    }

    // 3. Hash the password for security
    const hashedPassword = await bcrypt.hash(password, 12);

    // 4. Create the new user in the database
    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "user", // Default role, you can adjust this as needed
      },
    });

    // 5. Exclude the hashed password from the response for security reasons
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(userWithoutPassword);
  } catch (error: unknown) {
    // Log the error for server-side debugging
    console.error("REGISTRATION_ERROR:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
