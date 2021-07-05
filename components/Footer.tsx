import gsap from "gsap"
import React from "react";
import styles from "../styles/Footer.module.css"

export default function Footer() {
  
  return (
    <div>
        <div className={styles.wrapFooter}>
              <div className={styles.mytitle}>
                  JUSSMOR
              </div>
              <nav className={styles.navFooter}>
                  <div> my imagen</div>
                  <div>
                    <ul className={styles.navFooterItems}>
                        <li>Ig</li>
                        <li>Yt</li>
                        <li>TK</li>
                    </ul>
                  </div>
              </nav>
              <div> copyright</div>
        </div>
    </div>
  );
}
