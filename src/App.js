import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

let App = () => {
  //others

  let element = useElements();
  let stripe = useStripe();

  let cardElementOptions = {
    style: {
      base: {
        "::placeholder": {
          color: "green",
        },
        iconColor: "blue",
      },
      invalid: {},
      complete: {},
    },
    hidePostalCode: true,
  };

  let handleClick = () => {
    let cardElemet = element.getElement(CardElement);

    let paymentReq = stripe.createPaymentMethod({
      type: "card",
      card: cardElemet,
      billing_details: {
        name: "roosev",
        email: "aravindk6066@gmail.com",
      },
    });
  };

  //return statements
  return (
    <div style={{ width: "400px" }}>
      <form style={{ margin: "40px" }}>
        <input type="text" placeholder="enter name" />
        <br />
        <input type="text" placeholder="enter email" />
        <br />
        <CardElement options={cardElementOptions} />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
