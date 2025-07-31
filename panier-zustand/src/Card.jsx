import React from "react";
import useCartStore from "./store";

function Card() {
  const number = useCartStore((state) => state.number);

  return (
    <>
      <img
        className="imgCard"
        src="https://www.jumia.sn/assets_he/images/cart.668e6453.svg"
        alt=""
      />
      <h1 className="number">{number}</h1>
    </>
  );
}

export default Card;
