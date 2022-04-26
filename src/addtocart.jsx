import { useState } from "react";
import { data } from "./data.jsx";

const AddToCart = () => {
  return (
    <div>
      <div className="posts">
        {data.map((post) => {
          return (
            <div>
              <h4>{post.id}</h4>
              <p>{post.name}</p>
              <p>{post.price}</p>
              <button>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AddToCart;
