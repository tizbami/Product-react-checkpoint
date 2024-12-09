import React from "react";
import product from "./product";

const Image = () => {
  const style = {
    img: {
      width: "100%",
      height: "auto",
    },
  };
  return <img src={product.image} style={style.img} />;
};

export default Image;
