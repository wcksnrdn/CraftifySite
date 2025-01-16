// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        accessToken?: string; // Menambahkan akses token ke dalam session
        user: {
            id?: string;
            name?: string;
            email?: string;
            image?: string;
            // tambahkan properti lain sesuai kebutuhan
        };
    }
}
