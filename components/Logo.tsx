import React from "react";
import styles from "../styles/Logo.module.css";

export default function Logo() {
  return (
    <div>
      <div className={styles.logo}>
        Juss<span className={styles.logoWord}>Mor.</span>
      </div>
    </div>
  );
}
