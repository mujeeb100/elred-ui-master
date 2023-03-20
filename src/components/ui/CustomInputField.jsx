import React, { useState } from "react";

function CustomInputField({ id, label, value, onChange }) {
  return (
    <div className="block">
      <label htmlFor={id}>{label}</label>
      <input
        className="bg-gray-100 w-full p-3 outline-none"
        id={id}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomInputField;
