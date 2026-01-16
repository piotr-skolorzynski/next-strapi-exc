const TextInput = ({ inputName, value, onChange, label }) => {
  return (
    <div className="input__container">
      <label className="copy" htmlFor={inputName}>
        {label}
      </label>
      <input
        className="input input__text input--beige"
        type="text"
        id={inputName}
        name={inputName}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
