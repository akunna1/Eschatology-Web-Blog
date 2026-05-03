import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Counterfeit | Entries",
};

export default function EntriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}