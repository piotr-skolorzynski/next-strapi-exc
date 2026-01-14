"use client";
import { useState } from "react";

const SubscribeToNewsletter = () => {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.length) {
      //TODO: send email to strapi
      setHasSignedUp(true);
    }
  };

  return (
    <section className="newsletter">
      {hasSignedUp ? (
        <h4 className="newsletter__thanks">Thank you for subscribing!</h4>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>subscribe to our newsletter</h4>
            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>
          <form className="newsletter__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="newsletter__email input"
              placeholder="Enter your email address"
              value={email}
              onChange={onEmailChange}
            />

            <button
              className="newsletter__subscribe btn btn--medium btn--turquoise"
              type="submit"
            >
              SUBSCRIBE
            </button>
          </form>{" "}
        </>
      )}
    </section>
  );
};

export default SubscribeToNewsletter;
