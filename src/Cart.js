import React from "react";
import { useCart } from "react-use-cart";
export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return <h1 className="text-center text-info">Your Cart is Empthy</h1>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5 style={{color:"white"}}>
            <b>Products</b> : {totalUniqueItems}
            <br />
             <b>Total Products quantity</b> : {totalItems}
          </h5>
          <table className="table table-dark table-hover m-0 text-center">
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img alt="" src={item.img} style={{ height: "6rem" }} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity: ({item.quantity})</td>
                  <td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="btn btn-info ms-2"
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="btn btn-success ms-2"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-danger ms-2"
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2 style={{color:"white"}}>Total Price : {cartTotal + "$"}</h2>
        </div>
        <div className="col-auto">
            <button onClick={() => emptyCart()} className="btn btn-danger ">Remove all items</button>
            <button className="btn btn-primary ms-2">Buy now</button>
        </div>
      </div>
    </section>
  );
}
