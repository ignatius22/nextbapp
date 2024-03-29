"use client";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ReduxProvider from "@/redux/redux-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Montserrat({ subsets: ["latin"] });
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
// Create a client
const queryClient = new QueryClient();
const NoSSR = dynamic(() => import("../components/Header"), { ssr: false });

const metadata: Metadata = {
  title: "Next Basket App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider>
        <html lang="en">
          <body className={inter.className}>
            <main>
              <NoSSR />
              {children}
              <Footer />
            </main>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </body>
        </html>
      </ReduxProvider>
    </QueryClientProvider>
  );
}
