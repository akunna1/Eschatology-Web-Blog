import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Counterfeit | Map",
};

export default function MapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}