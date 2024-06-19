import Navbar from "@/components/Navbar";
import "../styles/main.scss";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import  { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prisma CRUD",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex">
          <div className="w-2/12">
            <Sidebar />
          </div>
          <div className="w-full sm:w-10/12">
            <main className="min-h-screen py-16 px-8 bg-slate-50">
              <Toaster position="top-center" />
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
