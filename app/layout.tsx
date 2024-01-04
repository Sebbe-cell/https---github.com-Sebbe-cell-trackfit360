"use client";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDashboard, setIsDashboard] = useState<boolean | null>(null);
  const currentPath = usePathname();

  useEffect(() => {
    if (currentPath === "/dashboard") {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  }, [currentPath]);

  if (isDashboard === null) {
    return (
      <html lang="sv">
        <body>
          <main>
            <h1>Loading...</h1>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang="sv">
      <body>
        {!isDashboard && <Navbar />}
        <main className="relative overflow-hidden">{children}</main>
        {!isDashboard && <Footer />}
      </body>
    </html>
  );
}
