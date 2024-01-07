// import Image from "next/image";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
// import React from "react";
import Navbar from "./component/Navbar";
import React, { useState, useEffect } from "react";
import Footer from "../pages/component/Footer";
import BannerImg from "./component/BannerImg";
import styles from "../styles/index.module.scss";
import PortfolioSection from "./component/Portfolio";
import Team from "./component/team";
import CounterSec from "./component/CounterSec";
import Testimonial from "./component/Testimonial";
export default function Home() {
  const [activeTab, setActiveTab] = useState("tab1");
  // const linearGradientStyle = {
  //   background: "linear-gradient(90deg, #143086, #ef4444)",
  //   // add other styles as needed
  // };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      {/* <div style={linearGradientStyle}> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <Navbar />
      <BannerImg />

      <section className="bg-gray-100 py-16 lg:px-36 md:9 sm:px-7">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mb-28 ">
            <div
              className="lg:pr-10 md:p-5 sm:w-full"
              style={{ width: "100%" }}
            >
              <h2
                className="text-4xl font-bold text-red-500 lg:mt-7  mb-6"
                id={styles.choosesecheadingM}
              >
                Why Choose <span className="text-blue-950">AK Digi-Nexus?</span>
              </h2>
              <p
                className="text-lg text-gray-700 mb-12 text-justify tracking-wider"
                id={styles.choosesecparaM}
              >
                Choose AK Digi-Nexus for a holistic digital experience that
                combines technical expertise, creative design, and compelling
                content. Your success is our commitment. At AK Digi-Nexus, we
                are your trusted digital partner, offering a comprehensive range
                of services to elevate your online presence. Here's why you
                should choose us:
              </p>
              <button
                className="bg-blue-900 p-3 sm:mb-5 rounded-full hover:bg-blue-950 transition delay-150 text-white"
                id={styles.choosesecbtnM}
              >
                View Learn
              </button>
            </div>
            <div id={styles.whychooseusImg}></div>
          </div>
          <h1 className="text-center mb-7 text-4xl text-blue-950 lg:mt-7">
            <b>
              Our <span className="text-red-500">Process</span>
            </b>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 mb-1">
            <div
              className="border border-red-200 border-solid border-t-2 border-r-2 border-b-2 border-l-2 pr-4 pb-10  ml-3 md:mt-5 mr-3"
              id={styles.processstepsM}
            >
              <div className="mt-0 bg-blue-950 text-gray-300 w-10 h-10 py-2 px-2">
                <b>01</b>
              </div>
              <h3 className="text-xl text-center text-red-500 font-semibold mb-4">
                Information Gathering
              </h3>
              <p className="text-gray-600 text-justify pl-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div
              className="border border-red-200 border-solid border-t-2 border-r-2 border-b-2 border-l-2 pr-4 pb-10 ml-3 md:mt-5 mr-3"
              id={styles.processstepsM}
            >
              <div className="mt-0 bg-blue-950 text-gray-300 w-10 h-10 py-2 px-2">
                <b>02</b>
              </div>
              <h3 className="text-xl text-center text-red-500 font-semibold mb-4">
                Planning
              </h3>
              <p className="text-gray-600 text-justify pl-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div
              className="border border-red-200 border-solid border-t-2 border-r-2 border-b-2 border-l-2 pr-4 pb-10 ml-3 md:mt-5 mr-3"
              id={styles.processstepsM}
            >
              <div className="mt-0 bg-blue-950 text-gray-300 w-10 h-10 py-2 px-2">
                <b>03</b>
              </div>
              <h3 className="text-xl text-center text-red-500 font-semibold mb-4">
                Design
              </h3>
              <p className="text-gray-600 text-justify pl-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div
              className="border border-red-200 border-solid border-t-2 border-r-2 border-b-2 border-l-2 pr-4 pb-10 ml-3 md:mt-5 mr-3"
              id={styles.processstepsM}
            >
              <div className="mt-0 bg-blue-950 text-gray-300 w-10 h-10 py-2 px-2">
                <b>04</b>
              </div>
              <h3 className="text-xl text-center text-red-500 font-semibold mb-4">
                Development
              </h3>
              <p className="text-gray-600 text-justify pl-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div
              className="border border-red-200 border-solid border-t-2 border-r-2 border-b-2 border-l-2 pr-4 pb-10 ml-3 md:mt-5 mr-3"
              id={styles.processstepsM}
            >
              <div className="mt-0 bg-blue-950 text-gray-300 w-10 h-10 py-2 px-2">
                <b>05</b>
              </div>
              <h3 className="text-xl text-center text-red-500 font-semibold mb-4">
                Testing and Delivery
              </h3>
              <p className="text-gray-600 text-justify pl-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div
              className="border border-red-200 border-solid border-t-2 border-r-2 border-b-2 border-l-2 pr-4 pb-10 ml-3 md:mt-5 mr-3"
              id={styles.processstepsM}
            >
              <div className="mt-0 bg-blue-950 text-gray-300 w-10 h-10 py-2 px-2">
                <b>06</b>
              </div>
              <h3 className="text-xl text-center text-red-500 font-semibold mb-4">
                Maintenance
              </h3>
              <p className="text-gray-600 text-justify pl-4">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center mb-16 text-4xl text-blue-950 lg:mt-12">
          <b>
            Our <span className="text-red-500">Services</span>
          </b>
        </h1>
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web Development - Custom Side */}
            <div className="mb-8">
              <div
                className="bg-transparent p-6 rounded-md shadow-2xl"
                style={{ height: "370px" }}
              >
                {/* <i className="fa-solid fa-code"></i> */}
                <center>
                  <i className="fa-solid fa-laptop-code fa-3x text-blue-950 mb-2"></i>
                </center>
                <h3 className="text-xl text-center font-semibold text-red-500 mb-4">
                  Web Development -<br /> Custom Side
                </h3>
                <p className="text-gray-600 text-justify">
                  Unlock the full potential of your online presence with our
                  custom web development solutions. We specialize in creating
                  tailor-made websites using the latest technologies and coding
                  languages.
                </p>
              </div>
            </div>

            {/* Web Development - CMS Side */}
            <div className="mb-8">
              <div
                className="bg-transparent  p-6 rounded-md shadow-2xl"
                style={{ height: "370px" }}
              >
                <center>
                  <i className="fa-brands fa-webflow fa-3x text-blue-950 mb-2"></i>
                </center>
                <h3 className="text-xl text-center text-red-500 font-semibold mb-4">
                  Web Development - <br />
                  CMS Side
                </h3>
                <p className="text-gray-600 text-justify">
                  Experience the ease and flexibility of content management
                  systems (CMS) with our expertise in platforms like WordPress.
                  We empower you to manage and update your website effortlessly.
                </p>
              </div>
            </div>

            {/* Graphic Designing */}
            <div className="mb-8">
              <div
                className="bg-transparent p-6 rounded-md shadow-2xl"
                style={{ height: "370px" }}
              >
                <center>
                  <i className="fa-solid fa-diagram-project fa-3x text-blue-950 mb-2"></i>
                </center>
                <h3 className="text-xl text-center text-red-500 font-semibold mb-4">
                  Creative Graphic <br /> Designing
                </h3>
                <p className="text-gray-600 text-justify ">
                  Make a lasting visual impact with our creative graphic design
                  services. From eye-catching logos to engaging visual content,
                  we bring your brand to life with compelling design solutions.
                </p>
              </div>
            </div>

            {/* Content Writing */}
            <div className="mb-8">
              <div
                className="bg-transparent p-6 rounded-md shadow-2xl"
                style={{ height: "370px" }}
              >
                <center>
                  {" "}
                  <i className="fa-regular fa-note-sticky fa-3x text-blue-950 mb-2"></i>
                </center>
                <h3 className="text-xl text-center text-red-500 font-semibold mb-4">
                  Expert Content <br /> Writing
                </h3>
                <p className="text-gray-600 text-justify">
                  Captivate your audience with compelling and SEO-friendly
                  content. Our expert content writing services ensure your
                  message is conveyed effectively, whether it's for your
                  website, blog, or marketing materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PortfolioSection />
      <CounterSec />
      <Team />
      <Testimonial />
      {/* technologies section */}
      <section className="technologiesSection">
        <div className="container mx-auto mb-14">
          <h1 className="font-bold text-blue-950 text-4xl text-center mt-24">
            We work on these <span className="text-red-500">technologies</span>
          </h1>
          <div className="flex justify-center px-4 mx-auto pt-2 pb-8 mt-8">
            <div>
              <div className="flex justify-center space-x-4">
                <div
                  className={`py-2 px-4 border-b-4 hover:text-red-500 font-medium text-gray-800 ${
                    activeTab === "tab1"
                      ? "border-b-blue-950 cursor-pointer"
                      : "border-transparent cursor-pointer"
                  }`}
                  onClick={() => handleTabClick("tab1")}
                >
                  Frontend
                </div>

                <button
                  className={`py-2 px-4 border-b-4 hover:text-red-500 font-medium text-gray-800 ${
                    activeTab === "tab2"
                      ? "border-b-blue-950 cursor-pointer"
                      : "border-transparent cursor-pointer"
                  }`}
                  onClick={() => handleTabClick("tab2")}
                >
                  Backend
                </button>

                <button
                  className={`py-2 px-4 border-b-4 hover:text-red-500 font-medium text-gray-800 ${
                    activeTab === "tab3"
                      ? "border-b-blue-950 cursor-pointer"
                      : "border-transparent cursor-pointer"
                  }`}
                  onClick={() => handleTabClick("tab3")}
                >
                  CMS
                </button>
                <button
                  className={`py-2 px-4 border-b-4 hover:text-red-500 font-medium text-gray-800 ${
                    activeTab === "tab4"
                      ? "border-b-blue-950 cursor-pointer"
                      : "border-transparent cursor-pointer"
                  }`}
                  onClick={() => handleTabClick("tab4")}
                >
                  Database
                </button>
                <button
                  className={`py-2 px-4 border-b-4 hover:text-red-500 font-medium text-gray-800 ${
                    activeTab === "tab5"
                      ? "border-b-blue-950 cursor-pointer"
                      : "border-transparent cursor-pointer"
                  }`}
                  onClick={() => handleTabClick("tab5")}
                >
                  Graphics
                </button>
              </div>

              <div className="mt-8 container">
                {/* Display content based on the active tab */}
                {activeTab === "tab1" && (
                  <div>
                    <div className="flex justify-evenly">
                      <div>
                        <i
                          className="fa-brands fa-react fa-4x"
                          id={styles.Techicons}
                        ></i>
                        <p>React</p>
                      </div>
                      <div>
                        <i
                          className="fa-brands fa-node-js fa-4x"
                          id={styles.Techicons}
                        ></i>
                        <p>JavaScript</p>
                      </div>
                      <div>
                        <i
                          className="fa-brands fa-square-js fa-4x"
                          id={styles.Techicons}
                        ></i>
                        <p>NodeJS</p>
                      </div>
                      <div>
                        <i
                          className="fa-brands fa-vuejs fa-4x"
                          id={styles.Techicons}
                        ></i>
                        <p>ViewJS</p>
                      </div>
                    </div>
                    <div className="flex justify-center gap-16 mt-8">
                      <div>
                        <i
                          className="fa-brands fa-html5 fa-4x"
                          id={styles.Techicons}
                        ></i>
                        <p>html5</p>
                      </div>
                      <div>
                        <i
                          className="fa-brands fa-css3-alt fa-4x"
                          id={styles.Techicons}
                        ></i>
                        <p>CSS3</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "tab2" && (
                  <div className="flex lg:justify-center gap-16 mt-8">
                    <div>
                      <i
                        className="fa-brands fa-php fa-4x"
                        id={styles.Techicons}
                      ></i>
                      <p>PHP</p>
                    </div>
                    <div>
                      <span className="text-5xl" id={styles.Techicons}>
                        ⚡
                      </span>
                      <p className="mt-3">Express.js</p>
                    </div>
                    <div>
                      <i
                        className="fa-brands fa-laravel fa-4x"
                        id={styles.Techicons}
                      ></i>
                      <p>Laravel</p>
                    </div>
                    <div>
                      <i
                        className="fa-brands fa-node fa-4x"
                        id={styles.Techicons}
                      ></i>
                      <p>NodeJS</p>
                    </div>
                  </div>
                )}

                {activeTab === "tab3" && (
                  <div className="flex lg:justify-center gap-16 mt-8">
                    <div>
                      <i
                        className="fa-brands fa-wordpress-simple fa-4x"
                        id={styles.Techicons}
                      ></i>
                      <p>wordpress</p>
                    </div>
                    <div>
                      <i
                        className="fa-solid fa-bag-shopping fa-4x"
                        id={styles.Techicons}
                      ></i>
                      <p>Shopify</p>
                    </div>
                    <div>
                      <i
                        className="fa-brands fa-wix fa-4x"
                        id={styles.Techicons}
                      ></i>
                      <p>Wix</p>
                    </div>
                  </div>
                )}
                {activeTab === "tab4" && (
                  <div className="flex lg:justify-center gap-16 mt-8">
                    <div>
                      <i
                        className="fab fa-envira fa-4x"
                        id={styles.Techicons}
                      ></i>
                      <p>MongoDB </p>
                    </div>
                    <div>
                      <i
                        className="fas fa-fire fa-4x"
                        id={styles.Techicons}
                      ></i>
                      <p>Firebase </p>
                    </div>
                    <div>
                      <i
                        className="fas fa-database fa-4x"
                        id={styles.Techicons}
                      ></i>
                      <p>MySQL</p>
                    </div>
                  </div>
                )}
                {activeTab === "tab5" && (
                  <div className="flex lg:justify-center gap-16 mt-8">
                    <div>
                      <span className="text-5xl" id={styles.Techicons}>
                        🎨
                      </span>
                      <p className="mt-3">PhotoShop</p>
                    </div>
                    <div>
                      <span className="text-5xl" id={styles.Techicons}>
                        ✒️
                      </span>
                      <p className="mt-3">Illustrator</p>
                    </div>
                    <div>
                      <span className="text-5xl" id={styles.Techicons}>
                        🖌️
                      </span>
                      <p className="mt-3">Canva</p>
                    </div>
                    <div>
                      <span className="text-5xl" id={styles.Techicons}>
                        📐
                      </span>
                      <p className="mt-3">InDesign</p>
                    </div>
                    <div>
                      <span className="text-5xl" id={styles.Techicons}>
                        🎥
                      </span>
                      <p className="mt-3">Premiere </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* </div> */}
    </>
  );
}
