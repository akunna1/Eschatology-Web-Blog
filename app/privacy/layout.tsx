import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Counterfeit | Privacy",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}