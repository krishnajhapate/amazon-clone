import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import "../css/Order.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Order({ order }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(order)
  return (
    <div className="order">
      <h2>Order Details</h2>
      <p><strong>On - </strong> {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          rating={item.rating}
          price={item.price}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="Order__total">
              Order Total : <strong>{value}</strong>
            </h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;


