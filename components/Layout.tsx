/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Logo from "./Logo";

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
      <div className="wrapper">
        <div className="wrap">
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Logo />
          <Navbar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
