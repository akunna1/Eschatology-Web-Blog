import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import ClientLayout from "./clientLayout";

// Roboto font with the weights
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Counterfeit",
  description: "Created by Akunna Onyekachi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="antialiased" suppressHydrationWarning={true} min-h-screen>
        <div>
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}