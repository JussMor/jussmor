/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  let date  = new Date();
  let year =  date.getUTCFullYear();
  return (
    <div>
      <div className={styles.wrapFooter}>
        <div className={styles.mytitle}>JUSSMOR</div>
        <nav className={styles.navFooter}>
          <div>  </div>
          <div>
            <div className={styles.navFooterItems}>
              <a href="https://www.instagram.com/jussmor" className={styles.LogoItems}>
                <img  src="/svg/instagram-brands.svg" alt="Instagram" />
              </a>
              <a  href="https://www.youtube.com/channel/UCXHTBH56s3VKSTHdLYupAlg" className={styles.LogoItems}>
                <img  src="/svg/youtube-brands.svg" alt="Youtube" />
              </a>
              <a href="https://www.tiktok.com/@jussmor" className={styles.LogoItems}>
                <img  src="/svg/tiktok-brands.svg" alt="TikTok" />
              </a>
            </div>
          </div>
        </nav>
        <div className={styles.Copyright}> 
          <p className={styles.CopyrightChild}> &copy; { year } Copyright Jussmor</p>
        </div>
      </div>
    </div>
  );
}
