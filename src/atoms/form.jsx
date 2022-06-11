import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";

class Form extends Component {
  validate() {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  validateProperty = ({ name, value }) => {
    const propertySchema = Joi.object({ [name]: this.schemaModel[name] });
    const { error } = propertySchema.validate({ [name]: value });
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validate();
    if (errors) {
      console.log("Validation error.");
      return this.setState({ errors });
    }

    this.doSubmit();
  };

  renderInput(name, label, placeholder, type = "text") {
    return (
      <Input
        name={name}
        label={label}
        placeholder={placeholder}
        type={type}
        onChange={this.handleChange}
        error={this.state.errors[name]}
      />
    );
  }

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }
}

export default Form;
