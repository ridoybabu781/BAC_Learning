import React from "react";

export default function SingleProduct({ product }) {
  return (
    <div>
      <div>
        <div className="flex flex-col ">
          {product?.images?.map((image) => (
            <>
              <img src={image} alt="" />
            </>
          ))}
        </div>
        <div>{<img src={product.images[0]} />}</div>
      </div>
      <div>
        <h1 className="text-3xl">
          {product.name}
          <span className="text-sm bg-green-300 text-green-600 p-1">
            {product.availability}
          </span>
        </h1>
        <div>
          <p>{Math.floor(product.rating.avarage)}</p>
          <p>
            <span>SKU: </span>
            {product.sku}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
