/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Footer.module.css";
import { social } from "../utils/Social";
import { svg } from "../utils/Svg";

export default function Footer() {
  let date = new Date();
  let year = date.getUTCFullYear();
  return (
    <div>
      <div className={styles.wrapFooter}>
        <div className={styles.mytitle}>JUSSMOR</div>
        <nav className={styles.navFooter}>
          <div> </div>
          <div>
            <div className={styles.navFooterItems}>
              <a href={social.Instagram} className={styles.LogoItems}>
                <img src={svg.Instagram} alt="Instagram" />
              </a>
              <a href={social.Youtube} className={styles.LogoItems}>
                <img src={svg.Youtube} alt="Youtube" />
              </a>
              <a href={social.Tiktok} className={styles.LogoItems}>
                <img src={svg.Tiktok} alt="TikTok" />
              </a>
            </div>
          </div>
        </nav>
        <div className={styles.Copyright}>
          <p className={styles.CopyrightChild}>
            {" "}
            &copy; {year} Copyright Jussmor
          </p>
        </div>
      </div>
    </div>
  );
}
