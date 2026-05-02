import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import ClientLayout from "./clientLayout";

// Global setup + Fonts + Metadata + HTML/body structure => Layout.tsx 

// Roboto font with the weights
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Counterfeit",
  description: "A Christian eschatology web app studying end-times prophecy and the rise of its greatest counterfeit form during the last days.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="antialiased min-h-screen" suppressHydrationWarning={true}>
        <div>
          <ClientLayout>
            {children}
          </ClientLayout>
        </div>
      </body>
    </html>
  );
}