import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <h2 className="slide-title">{slide.title}</h2>
          <div className="slidetextdiv">
          <h3 className="slide-text">{slide.description}</h3>
          </div>
          
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
