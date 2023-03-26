import React from "react";
import ItemCart from "./ItemCart";
import data from "./data";
export default function Home() {
  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <ItemCart
                img={item.img}
                item={item}
                title={item.title}
                desc={item.desc}
                price={item.price}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
