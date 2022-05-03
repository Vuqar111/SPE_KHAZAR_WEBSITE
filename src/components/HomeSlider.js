import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "react-elastic-carousel";
const HomeSlider = () => {
  return (
    <div>
      <Carousel itemsToShow={1}>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
      </Carousel>
    </div>
  );
};

export default HomeSlider;
