import styles from "../component styling/technologiesSec.module.scss";
import React, { useState } from "react";
function Technologies() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha384-oNOVXThvFZIKGOU6pa1Fg90JWeBcYI1p1I+orxwDpKQT5tr5G9L0OxK/Po7xKI+3"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <section className="technologiesSection">
        <div className="container mx-auto">
          <h1 className="font-bold text-blue-950 text-4xl text-center mt-16">
            We work on these <span className="text-red-500">technologies</span>
          </h1>
          <div className="flex justify-center px-4 mx-auto mt-8">
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
    </>
  );
}
export default Technologies;
