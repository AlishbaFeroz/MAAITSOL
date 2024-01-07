// components/Process.js

import React from "react";
import styles from "../component styling/process.module.scss";

function Process() {
  return (
    <>
      <div className="bg-blue-500 relative m-4" id={styles.hexagoncontainer}>
        <div
          className="absolute inset-0 flex items-center justify-center"
          id={styles.hexagoncontent}
        >
          {/* Your content goes here */}
          <p className="text-white">Hello, Hexagon!</p>
        </div>
      </div>
      <p className={styles.hh}>gggg</p>
    </>
  );
}

export default Process;
