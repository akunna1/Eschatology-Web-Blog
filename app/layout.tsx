import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./clientLayout";

// Global setup + Metadata + HTML/body structure => Layout.tsx 
// Font was moved to globals.css

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
    <html lang="en">
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