/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
if (typeof window !== "undefined") {
    window.addEventListener("scroll", function () {
        let wrapper = document.querySelector(".wrapper") as HTMLInputElement;
        let cuerpo = this.document.querySelector("body");
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
            <Navbar />
            <section className="transparent">
            <div className="headline"></div>
            <div className="text"></div>
            <div className="text"></div>
            <div className="button"></div>
            </section>
            <section className="cards ">
            <div className="card">
                <img
                src="httFps://imgplaceholder.com/500x300/transparent/ddd/ion-image"
                alt=""
                />
                <div className="content">
                <div className="headline"></div>
                <div className="text"></div>
                <div className="text"></div>
                <div className="button"></div>
                </div>
            </div>
            </section>
            <section className="contentbox">
            {children}
            <div className="headline"></div>
            <div className="text"></div>
            <div className="text"></div>
            <div className="text"></div>
            <div className="button"></div>
            </section>
        </div>
        </div>
        <Footer />
    </div>
);
}
