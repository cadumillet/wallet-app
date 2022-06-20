import React from "react";

const Select = ({ name, label, options }) => {
  return (
    <React.Fragment>
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <select className="form-select" name={name} id={name}>
          {options.map((opt) => (
            <option key={opt._id} value={opt.name}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
};

export default Select;
