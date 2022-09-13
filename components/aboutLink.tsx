import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AboutLink() {
  return (
    <div
      style={{
        position: "absolute",
        color: "white",
        right: "30px",
        top: "30px",
      }}
    >
      <Link href="/about">
        <Image src="/question.svg" alt="about" width="30px" height="30px" />
      </Link>
    </div>
  );
}
