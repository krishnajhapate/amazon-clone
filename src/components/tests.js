import React, { useEffect, useState } from "react";
import "../css/Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Tests from "./tests";

function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  //   console.log(orders?.map((order) => order.id));

  useEffect(() => {
    if (user) {
      db
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders </h1>
      <div className="orders__order">
        {orders?.map((order) => {
          <Tests order={order} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
