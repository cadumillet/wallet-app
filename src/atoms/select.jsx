import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <React.Fragment>
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <select className="form-select" name={name} id={name} {...rest}>
          <option value="" />
          {options.map((opt) => (
            <option key={opt._id} value={opt._id}>
              {opt.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default Select;
