import React from "react";
import styles from "../component styling/bnrimg.module.scss";
function BannerImg() {
  return (
    <>
      <div className={styles.bnrimg}>
        <div className="flex justify-center h-5/6 items-center">
          <div className="w-5/12 text-center">
            <h1 className="text-white text-4xl">
              <b>
                Elevate Your Brand with <br />
                <span className="text-red-500">AK Digi-Nexus</span>
              </b>
            </h1>

            <button className="bg-blue-900 p-3 rounded-full hover:bg-blue-950 transition delay-150 font-normal mt-9 text-white">
              Explore Services
            </button>
          </div>
        </div>
      </div>
      {/* <h1 className={styles.heading}>hhhhh</h1> */}
    </>
  );
}

export default BannerImg;
