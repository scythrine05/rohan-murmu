import React, { useEffect, useRef } from "react";

export default function TextInput({
  name,
  label,
  type,
  required,
  value,
  onChange,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleInput = () => {
      const inputElement = inputRef.current;
      if (inputElement.value.trim() !== "") {
        inputElement.classList.add("not-empty");
      } else {
        inputElement.classList.remove("not-empty");
      }
    };

    const inputElement = inputRef.current;
    inputElement.addEventListener("input", handleInput);

    return () => {
      inputElement.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <div className="text-field col x-50">
      <input
        ref={inputRef}
        id={name}
        className="input-text js-input"
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
      <label className="text-label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
