import React from "react";

const FormField = ({ label, name, type, placeholder, className }) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="">
        <input
          name={name}
          type={type}
          className={className}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FormField;
