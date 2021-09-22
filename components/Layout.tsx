/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css"


export default function Layout({ children }: { children: React.ReactNode }) {

   if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
      let wrapper = document.querySelector(".wrapper") as HTMLInputElement;
      let cuerpo = this.document.querySelector("body");
      wrapper.style.transition = "all 0.5s ease 0s";
      if (window.pageYOffset + window.outerHeight > wrapper.scrollHeight) {
        cuerpo!.classList.add("tight");
      } else {
        cuerpo!.classList.remove("tight");
      }
    });

  }
  return (
    <div>
      <picture>
        <source media="(max-width:726px)"  srcSet="fotos/moviler.webp"/>
        <source media="(max-width:1024px)"  srcSet="fotos/tablet.webp"/>
        <img className={styles.NewImg} alt="web" src="fotos/web.webp"/> 
      </picture>
      
      <div className="wrapper">
        <div className="wrap">
          {children}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
