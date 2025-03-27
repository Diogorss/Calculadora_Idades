import React from "react";

function InputField({ label, placeholder, value, onChange, maxLength }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        pattern="[0-9]*"
        inputMode="numeric"
        maxLength={maxLength}
      />
    </div>
  );
}

export default InputField;
