import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Counterfeit | Forum",
};

export default function ForumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}