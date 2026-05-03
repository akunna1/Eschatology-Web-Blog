import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Counterfeit | Attestation",
};

export default function AttestationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}