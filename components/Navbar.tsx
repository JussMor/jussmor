/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { svg } from "../utils/Svg";
import { social} from "../utils/Social"

export default function Navbar() {


  return (
    <div>
      <nav className={styles.NavbarFlex}>
        <ul className={styles.NavbarItems}>
          <Link href="/ ">
            <a>Inicio </a>
          </Link>
          <a href="">
            <li>Videos</li>
          </a>
          <Link href="">
            <a>Blog</a>
          </Link>
          <a href="">
            <li>Podcast</li>
          </a>
        </ul>
        <ul className={styles.NavbarSocial}>
          <a href={social.Instagram}>
            <img src={svg.Instagram} alt="Instagram" />
          </a>
          <a href={social.Youtube}>
            <img src={svg.Youtube} alt="Youtube" />
          </a>
          <a href={social.Tiktok}>
            <img src={svg.Tiktok} alt="Tiktok" />
          </a>
        </ul>
      </nav>
    </div>
  );
}
