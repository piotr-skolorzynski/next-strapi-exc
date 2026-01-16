"use client";
import { useState } from "react";
import TextInput from "../TextInput";
import axios from "axios";
import { allDataFilledIn } from "@/utils/validation.utils";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const SignupForm = ({ infoText, headline, buttonLabel, pricing }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      data: { ...formData, isGeneralInterest: true },
    };

    if (allDataFilledIn(formData)) {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/participants`,
          payload
        );

        setShowConfirmation(true);
      } catch (error) {
        console.log(error);
        setErrorMessage(
          error.response?.data?.error?.message || "Something went wrong"
        );
      }
    } else {
      setErrorMessage("Please fill out all fields");
    }
  };

  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">{headline}</h3>

        <BlocksRenderer
          content={infoText}
          blocks={{
            paragraph: ({ children }) => <p className="copy">{children}</p>,
          }}
        />
      </div>

      {showConfirmation ? (
        <div className="signup-form__form">
          <h4>Thank you for signing up. We will get in touch soon!</h4>
        </div>
      ) : (
        <form className="signup-form__form" onSubmit={handleSubmit}>
          <div className="signup-form__name-container">
            <TextInput
              inputName="firstName"
              label="First Name"
              value={formData.firstName}
              onChange={onChange}
            />

            <TextInput
              inputName="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={onChange}
            />
          </div>

          <TextInput
            inputName="email"
            label="Your e-mail address"
            value={formData.email}
            onChange={onChange}
          />

          <TextInput
            inputName="phone"
            label="Your telephone number"
            value={formData.phone}
            onChange={onChange}
          />

          {errorMessage && (
            <p className="copy signup-form__error">{errorMessage}</p>
          )}

          <button type="submit" className="btn btn--medium btn--turquoise">
            {buttonLabel || "Stay in touch!"}
          </button>

          {pricing && (
            <div className="signup-form__pricing">
              <h3>Pricing</h3>
              <p className="copy">
                Single Room:{" "}
                <span className="bold">{pricing.singlePrice}€ per person</span>
              </p>
              <p className="copy">
                Shared Room:{" "}
                <span className="bold">{pricing.sharedPrice}€ per person</span>
              </p>
            </div>
          )}
        </form>
      )}
    </section>
  );
};

export default SignupForm;
