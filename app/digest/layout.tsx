import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Counterfeit | Digest",
};

export default function DigestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}