import React from "react";

const Input = ({ name, label, placeholder, error, ...rest }) => {
  return (
    <React.Fragment>
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input
          {...rest}
          className="form-control"
          placeholder={placeholder ? placeholder : null}
          name={name}
          id={name}
        />
        {error && <div className="form-text text-danger">{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default Input;
