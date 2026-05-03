import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Counterfeit | Contribute",
};

export default function ContributeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}