import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Counterfeit | Prelude",
};

export default function PreludeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}