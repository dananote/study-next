"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">HOME {path === "/" ? "👈" : ""}</Link>
        </li>
        <li>
          <Link href="/about-us">
            ABOUT US {path === "/about-us" ? "👈" : ""}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
