import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../component styling/testimonial.module.scss";
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    company: "ABC Inc.",
    clientImg: ["pix/person2.jpg"],
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur magna aliqu alum meaning ful.",
    company: "XYZ Corp.",
    clientImg: ["pix/person2.jpg"],
  },
  {
    id: 3,
    name: "Bob Johnson",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat magna aliqua.",
    company: "123 Ltd.",
    clientImg: ["pix/person2.jpg"],
  },
];

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "m-10",
    draggable: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const renderTestimonials = () =>
    testimonials.map((testimonial) => (
      <center>
        <div id={styles.testimonialslide}>
          <div
            className="w-96 sm:w-full p-7 border-r-2 bg-slate-50"
            key={testimonial.id}
            style={{ borderRadius: "20px" }}
          >
            <img
              src={testimonial.clientImg}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full "
            />
            <p className="text-lg text-gray-600">{testimonial.text}</p>
            <div className="mt-1">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>

              <br />
              <strong className="text-blue-950">{testimonial.name}</strong>
              <p className="text-gray-500">{testimonial.company}</p>
            </div>
          </div>
          <div
            className="w-96 sm:w-full p-7 border-r-2 ml-7 bg-slate-50"
            style={{ borderRadius: "20px" }}
            key={testimonial.id}
          >
            <img
              src={testimonial.clientImg}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full "
            />
            <p className="text-lg text-gray-600">{testimonial.text}</p>
            <div className="mt-1">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
              <br />
              <strong className="text-blue-950">{testimonial.name}</strong>
              <p className="text-gray-500">{testimonial.company}</p>
            </div>
          </div>
          <div
            className="w-96 sm:w-full p-7 border-r-2 ml-7 bg-slate-50"
            key={testimonial.id}
            style={{ borderRadius: "20px" }}
          >
            <img
              src={testimonial.clientImg}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full "
            />
            <p className="text-lg text-gray-600">{testimonial.text}</p>
            <div className="mt-1">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-solid fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
              <br />
              <strong className="text-blue-950">{testimonial.name}</strong>
              <p className="text-gray-500">{testimonial.company}</p>
            </div>
          </div>
        </div>
      </center>
    ));

  const radioButtons = testimonials.map((_, index) => (
    <input
      key={index}
      type="radio"
      id={`radio${index}`}
      name="testimonialRadio"
      checked={currentSlide === index}
      className="m-1"
      onChange={() => setCurrentSlide(index)}
      onClick={() => sliderRef.current.slickGoTo(index)}
    />
  ));

  return (
    <>
      <div id={styles.testimonialcontainer} className="mb-16">
        <h1 className="text-white font-bold text-center text-3xl pt-8">
          OUR CLIENTS TESTIMONIAL
        </h1>
        <Slider ref={sliderRef} {...settings}>
          {renderTestimonials()}
        </Slider>
        <div id={styles.radiobuttons}>{radioButtons}</div>
      </div>
    </>
  );
}

export default Testimonial;
