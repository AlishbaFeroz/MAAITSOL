import React from "react";
import styles from "../component styling/countersec.module.scss";
function CounterSec() {
  return (
    <>
      {/* counter section */}
      <section className={styles.countersec}>
        <div className="container">
          <h1 className="text-white text-4xl text-center pb-7 pt-24">
            <b>Crafting Success Stories Beyond Expectations</b>
          </h1>
          <div className="grid grid-cols-1 lg:pl-32 lg:pr-32 lg:pt-10 p-20 sm:p-20 sm:grid-cols-1 lg:grid-cols-4 gap-20">
            <div
              className="bg-blue-100 h-48 pt-10 text-center"
              id={styles.countercol}
            >
              <h1 className="text-red-500 font-serif text-2xl text-center">
                Our Projects
              </h1>
              <h3 className="text-blue-950 pt-3 font-semibold text-5xl text-center">
                500+
              </h3>
            </div>
            <div
              className="bg-blue-100 h-48 pt-10 text-center"
              id={styles.countercol}
            >
              <h1 className="text-red-500 font-serif text-2xl text-center">
                Happy Clients
              </h1>
              <h3 className="text-blue-950 pt-3 font-semibold text-5xl text-center">
                470+
              </h3>
            </div>
            <div
              className="bg-blue-100 h-48 pt-10 text-center"
              id={styles.countercol}
            >
              <h1 className="text-red-500 font-serif text-2xl text-center">
                Talented Team
              </h1>
              <h3 className="text-blue-950 pt-3 font-semibold text-5xl text-center">
                50+
              </h3>
            </div>
            <div
              className="bg-blue-100 h-48 pt-10 text-center"
              id={styles.countercol}
            >
              <h1 className="text-red-500 font-serif text-2xl text-center">
                working Hours
              </h1>
              <h3 className="text-blue-950 pt-3 font-semibold text-5xl text-center">
                24
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CounterSec;
