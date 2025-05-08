import Navbar from "@/app/components/Navbar";
import { Providers } from "@/app/providers";
import { SessionProvider } from "next-auth/react";

export default function LeaderboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <Navbar />
        {children}
      </Providers>
    </>
  );
}
