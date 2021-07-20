/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { svg } from "../utils/Svg";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.NavbarFlex}>
        <ul className={styles.NavbarItems}>
          <a href="">
            <li>Sobre mi</li>
          </a>
          <a href="">
            <li>Videos</li>
          </a>
          <Link href="/post/Blog">
            <a>Blog</a>
          </Link>
          <a href="">
            <li>Podcast</li>
          </a>
        </ul>
        <ul className={styles.NavbarSocial}>
            <img src={svg.Instagram}  alt="Instagram" />
            <img src={svg.Youtube}  alt="Instagram" />
            <img src={svg.Tiktok}  alt="Instagram" />
        </ul>
      </nav>
    </div>
  );
}
