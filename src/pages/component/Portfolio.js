// import React, { useState } from "react";
// const PortfolioSection = () => {
//   const [activeTab1, setActiveTab1] = useState("webdesign");
//   const [activeTab2, setActiveTab2] = useState("");
//   const [activeTab3, setActiveTab3] = useState("");
//   const [activeTab4, setActiveTab4] = useState("");
//   const [activeTab5, setActiveTab5] = useState("");

//   const handleTabClick = (tabName) => {
//     setActiveTab1(tabName === "webdesign" ? tabName : "");
//     setActiveTab2(tabName === "2dcharacter" ? tabName : "");
//     setActiveTab3(tabName === "3dcharacter" ? tabName : "");
//     setActiveTab4(tabName === "logodesign" ? tabName : "");
//     setActiveTab5(tabName === "bannerdesign" ? tabName : "");
//     // You can add logic to load the corresponding portfolio content based on the selected tab.
//   };

//   return (
//     <section className="">
//       <div className="container mx-auto">
//         <h1 className="text-center mb-16 text-4xl text-blue-950 lg:mt-12">
//           <b>
//             Our <span className="text-red-500">Portfolio</span>
//           </b>
//         </h1>
//         <div
//           className=" space-x-4"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             marginBottom: "30px",
//           }}
//         >
//           {/* Web design Tab */}
//           <button
//             className={`py-2 px-4 border-b-4 ${
//               activeTab1 === "webdesign"
//                 ? "border-b-blue-950"
//                 : " border-transparent"
//             }`}
//             onClick={() => handleTabClick("webdesign")}
//           >
//             web design
//           </button>
//           {/* 2d character design Tab */}
//           <button
//             className={`py-2 px-4 border-b-4 ${
//               activeTab2 === "2dcharacter"
//                 ? " border-b-blue-950"
//                 : "border-transparent"
//             }`}
//             onClick={() => handleTabClick("2dcharacter")}
//           >
//             2d character
//           </button>
//           {/* 3d character Tab */}
//           <button
//             className={`py-2 px-4 border-b-4 ${
//               activeTab3 === "3dcharacter"
//                 ? " border-b-blue-950"
//                 : "border-transparent"
//             }`}
//             onClick={() => handleTabClick("3dcharacter")}
//           >
//             3d character
//           </button>
//           {/* Logo design Web Tab */}
//           <button
//             className={`py-2 px-4 border-b-4 ${
//               activeTab4 === "logodesign"
//                 ? " border-b-blue-950"
//                 : "border-transparent"
//             }`}
//             onClick={() => handleTabClick("logodesign")}
//           >
//             logo design
//           </button>

//           {/* banner Tab */}
//           <button
//             className={`py-2 px-4 border-b-4 ${
//               activeTab5 === "bannerdesign"
//                 ? " border-b-blue-950"
//                 : "border-transparent"
//             }`}
//             onClick={() => handleTabClick("bannerdesign")}
//           >
//             banner design
//           </button>
//         </div>

//         {/* Display Portfolio Content based on the Active Tab */}
//         {activeTab1 === "webdesign" && (
//           <div className="container mx-auto px-12">
//             <div className="grid grid-cols-1 p-7 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div>
//                 <img src="pix/webPortfolio1.jpg" />
//               </div>
//               <div>
//                 <img src="pix/webPortfolio2.jpg" />
//               </div>
//               <div>
//                 <img src="pix/webPortfolio3.jpg" />
//               </div>
//               <div>
//                 <img src="pix/webPortfolio6.jpg" />
//               </div>
//               <div>
//                 <img src="pix/webPortfolio5.jpg" />
//               </div>
//               <div>
//                 <img src="pix/webPortfolio4.jpg" />
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab2 === "2dcharacter" && (
//           <div className="container mx-auto px-12">
//             <div className="grid grid-cols-1 p-7 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div>
//                 <img
//                   src="pix/2d1.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d2.webp"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d3.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d4.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d5.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d6.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d7.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d8.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d9.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d10.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d11.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d12.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d13.jpeg"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/2d15.webp"
//                   style={{ height: "270px", width: "100%" }}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab3 === "3dcharacter" && (
//           <div className="container mx-auto px-12">
//             <div className="grid grid-cols-1 p-7 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div>
//                 <img
//                   src="pix/3d1.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/3d2.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/3d4.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/3d5.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/3d6.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/3d3.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/3d7.jpeg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/3d8.jpeg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/3d9.jpeg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//         {activeTab4 === "logodesign" && (
//           <div className="container mx-auto px-12">
//             <div className="grid grid-cols-1 p-7 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div>
//                 <img
//                   src="pix/logo1.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/logo2.png  "
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/logo3.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/logo4.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/logo5.jpg"
//                   style={{ height: "250px", width: "100%" }}
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//         {activeTab5 === "bannerdesign" && (
//           <div className="container mx-auto px-12">
//             <div className="grid grid-cols-1 p-7 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div>
//                 <img
//                   src="pix/bnr1.jpg"
//                   style={{ height: "20px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/bnr2.jpg  "
//                   style={{ height: "20px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/bnr3.jpg"
//                   style={{ height: "20px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/bnr5.jpg"
//                   style={{ height: "20px", width: "100%" }}
//                 />
//               </div>
//               <div>
//                 <img
//                   src="pix/bnr6.jpg"
//                   style={{ height: "20px", width: "100%" }}
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;

import React, { useState, useEffect } from "react";

const PortfolioSection = () => {
  const tabData = [
    {
      name: "webdesign",
      label: "Web Design",
      images: [
        "pix/webPortfolio1.jpg",
        "pix/webPortfolio2.jpg",
        "pix/webPortfolio3.jpg",
        "pix/webPortfolio6.jpg",
        "pix/webPortfolio5.jpg",
        "pix/webPortfolio4.jpg",
      ],
    },
    {
      name: "2dcharacter",
      label: "2D Character",
      images: [
        "pix/2d1.jpeg",
        "pix/2d2.webp",
        "pix/2d3.jpeg",
        "pix/2d4.jpeg",
        "pix/2d5.jpeg",
        "pix/2d6.jpeg",
        "pix/2d7.jpeg",
        "pix/2d8.jpeg",
        "pix/2d9.jpeg",
        "pix/2d10.jpeg",
        "pix/2d11.jpeg",
        "pix/2d12.jpeg",
        "pix/2d13.jpeg",
        "pix/2d15.webp",
      ],
    },
    {
      name: "3dcharacter",
      label: "3D Character",
      images: [
        "pix/3d1.jpg",
        "pix/3d2.jpg",
        "pix/3d4.jpg",
        "pix/3d5.jpg",
        "pix/3d6.jpg",
        "pix/3d3.jpg",
        "pix/3d7.jpeg",
        "pix/3d8.jpeg",
        "pix/3d9.jpeg",
      ],
    },
    {
      name: "logodesign",
      label: "Logo Design",
      images: [
        "pix/logo1.jpg",
        "pix/logo2.png",
        "pix/logo3.jpg",
        "pix/logo4.jpg",
        "pix/logo5.jpg",
      ],
    },
    {
      name: "bannerdesign",
      label: "Banner Design",
      images: [
        "pix/bnr1.jpg",
        "pix/bnr2.jpg",
        "pix/bnr3.jpg",
        "pix/bnr5.jpg",
        "pix/bnr6.jpg",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState("webdesign");

  useEffect(() => {
    // Set the active tab on initial load (when the component mounts)
    const path = window.location.pathname;
    const tabName = path.substring(1); // Remove leading slash

    if (tabData.some((tab) => tab.name === tabName)) {
      setActiveTab(tabName);
    }
  }, []); // Empty dependency array to ensure this effect runs only once on mount

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const activeTabData = tabData.find((tab) => tab.name === activeTab);

  return (
    <section className="">
      <div className="container mx-auto">
        <h1 className="text-center mb-16 text-4xl text-blue-950 lg:mt-12">
          <b>
            Our <span className="text-red-500">Portfolio</span>
          </b>
        </h1>
        <div
          className=" space-x-4"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          {tabData.map((tab) => (
            <button
              key={tab.name}
              className={`py-2 px-4 border-b-4 ${
                activeTab === tab.name
                  ? "border-b-blue-950"
                  : " border-transparent"
              }`}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Display Portfolio Content based on the Active Tab */}
        {activeTabData && (
          <div className="container mx-auto px-12">
            <div className="grid grid-cols-1 p-7 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeTabData.images.map((image, index) => (
                <div key={index}>
                  <img src={image} style={{ height: "270px", width: "100%" }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
