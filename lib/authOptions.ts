import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          }),
        ]
      : []),
    ...(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET
      ? [
          GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
          }),
        ]
      : []),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        try {
          const user = await db.user.findUnique({
            where: { email: credentials.email },
          });

          // Ensure user exists and has a password (social-only users won't have one)
          if (!user || !user.password) {
            throw new Error("Invalid credentials");
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role,
          };
        } catch (error) {
          console.error("Auth error:", error);
          throw error;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(
        "📌 SignIn callback triggered for:",
        user.email,
        "Provider:",
        account?.provider,
      );

      // Handle OAuth sign-in (Google, GitHub, etc.)
      if (account && account.type === "oauth") {
        try {
          console.log("🔍 Processing OAuth login...");

          // Check if user exists by email
          let dbUser = await db.user.findUnique({
            where: { email: user.email! },
          });

          console.log("👤 Existing user found:", dbUser ? "Yes" : "No");

          // Create user if doesn't exist
          if (!dbUser) {
            console.log("➕ Creating new user...");
            dbUser = await db.user.create({
              data: {
                email: user.email!,
                name: user.name || profile?.name || "",
                image: user.image || profile?.image || "",
                role: "user",
              },
            });
            console.log("✅ User created:", dbUser.id);
          } else {
            // Update user if profile info changed
            const updateData: any = {};
            if (dbUser.image !== user.image)
              updateData.image = user.image || dbUser.image;
            if (dbUser.name !== user.name)
              updateData.name = user.name || dbUser.name;

            if (Object.keys(updateData).length > 0) {
              console.log("📝 Updating user info...");
              await db.user.update({
                where: { id: dbUser.id },
                data: updateData,
              });
              console.log("✅ User updated");
            }
          }

          // Link account to user if not already linked
          const existingAccount = await db.account.findUnique({
            where: {
              provider_providerAccountId: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
            },
          });

          console.log(
            "🔗 Linked account found:",
            existingAccount ? "Yes" : "No",
          );

          if (!existingAccount) {
            console.log("➕ Linking account...");
            await db.account.create({
              data: {
                userId: dbUser.id,
                type: account.type,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                refresh_token: account.refresh_token,
                access_token: account.access_token,
                expires_at: account.expires_at,
                token_type: account.token_type,
                scope: account.scope,
                id_token: account.id_token,
                session_state: account.session_state,
              },
            });
            console.log("✅ Account linked successfully");
          }

          console.log("🎉 SignIn successful");
          return true;
        } catch (error) {
          console.error("❌ SignIn error:", error);
          // Allow login to proceed even if DB save fails
          // This prevents being locked out
          return true;
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      } else if (token.email && !token.role) {
        // Fetch user from database if JWT doesn't have role
        try {
          const dbUser = await db.user.findUnique({
            where: { email: token.email as string },
          });
          if (dbUser) {
            token.id = dbUser.id;
            token.role = dbUser.role;
            token.name = dbUser.name;
            token.picture = dbUser.image;
          }
        } catch (error) {
          console.error("Error fetching user in JWT callback:", error);
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = (token.role as string) || "user";
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};
