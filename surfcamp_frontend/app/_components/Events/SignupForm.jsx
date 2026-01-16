"use client";
import { useState } from "react";
import TextInput from "../TextInput";

const SignupForm = ({ infoText, headline, buttonLabel }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">{headline}</h3>
        {/* TODO: rich text wyświetl później jako renderer starpi component */}
        {infoText}
      </div>

      <form className="signup-form__form">
        <div className="signup-form__name-container">
          <TextInput
            inputName="firstName"
            label="First Name"
            value={FormData.firstName}
            onChange={onChange}
          />

          <TextInput
            inputName="lastName"
            label="Last Name"
            value={FormData.lastName}
            onChange={onChange}
          />
        </div>

        <TextInput
          inputName="email"
          label="Your e-mail address"
          value={FormData.email}
          onChange={onChange}
        />

        <TextInput
          inputName="phone"
          label="Your telephone number"
          value={FormData.phone}
          onChange={onChange}
        />

        <button type="submit" className="btn btn--medium btn--turquoise">
          {buttonLabel || "Stay in touch!"}
        </button>
      </form>
    </section>
  );
};

export default SignupForm;
