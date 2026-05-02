"use client";

import Link from "next/link";

type MenuProps = React.HTMLAttributes<HTMLDivElement>; // Extending HTML attributes for flexibility

export default function Menu({ className, ...props }: MenuProps) {
  return (
    <div className={className} {...props}>
      <div className="bg-black p-4">
        <div className="w-full flex justify-end items-center space-x-7">
          <h3>
            <Link href="/prelude" className="text-white hover:text-gray-400">
              Prelude
            </Link>
          </h3>
          <h3>
            <Link href="/attestation" className="text-white hover:text-gray-400">
              Attestation
            </Link>
          </h3>
          <h3>
            <Link href="/forum" className="text-white hover:text-gray-400">
              Forum
            </Link>
          </h3>
          <h3>
            <Link href="/map" className="text-white hover:text-gray-400">
              Map
            </Link>
          </h3>
          <h3>
            <Link href="/digest" className="text-white hover:text-gray-400">
              Digest
            </Link>
          </h3>
          <h3>
            <Link href="/about" className="text-white hover:text-gray-400">
              About
            </Link>
          </h3>
          <h3>
            <Link href="/contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}