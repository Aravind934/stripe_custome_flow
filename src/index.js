import ReactDom from "react-dom";
import App from "./App";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

let stripePromise = loadStripe(
  "pk_test_51HSFbyBZtMjFA5qhXPJQnwxVr8m8MnRQtQu2nKIl76TRkQnYbZjBF0Pojs7YNAArEkFzeJKmN02e3oSeSOuIiPqo0015nZhuTE"
);

ReactDom.render(
  <Elements stripe={stripePromise}>
    <App />
  </Elements>,

  document.getElementById("root")
);
