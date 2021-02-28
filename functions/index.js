const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HxUyIKUScPc6gPFFuCsSCzgmQCmue4OD06LLSJA9C9eipIoCzkCpKDoM04GpLMJDeFXIYVLvbL0N2D04QVkIxvA00OeztXnmD"
);

// API

// App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment reuest reveived ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  //   OK created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//  -Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-231dc/us-central1/api
