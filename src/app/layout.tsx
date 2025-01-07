import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProjectNest",
  description: "ProjectNest is a comprehensive project management and tracking web application designed to streamline workflows, enhance collaboration, and ensure efficient task management. It offers real-time task assignment, progress tracking, resource management, and powerful analytics, empowering teams to complete projects on time and within scope. With visual tools like Gantt charts, Kanban boards, and integrated communication features, ProjectNest simplifies project management to boost productivity and team success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
