"use client";

import { Routes } from "@/config/routes";
import React from "react";
import Link from "next/link";

const MainHeader: React.FC = () => {
  return (
    <div>
      header
      <Link
        href={Routes.Root}
        passHref
        style={{
          textDecoration: "none",
        }}
      >
        Go to Home
      </Link>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {Object.entries(Routes).map(([key, path]) => (
            <li key={key} style={{ margin: "8px 0" }}>
              <Link
                href={path}
                passHref
                style={{
                  textDecoration: "none",
                }}
              >
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
