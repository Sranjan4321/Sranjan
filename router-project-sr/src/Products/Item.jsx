import React from "react";

const Item = ({ elem }) => {
  let { img, name, pettype, type } = elem;
  return (
    <div>
      <img src={img} alt="img" style={{ width: "100%" }} />
      <p>Name:{name}</p>
      <p>petType:{pettype}</p>
      <p>Animal-Type:{type}</p>
      <button>add to cart</button>
    </div>
  );
};

export default Item;
