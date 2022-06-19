import React from "react";
import Joi from "joi-browser";
import Form from "../atoms/form";

class Signup extends Form {
  state = {
    data: { firstName: "", lastName: "", email: "", password: "" },
    errors: {},
  };

  schemaModel = {
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    email: Joi.string().required().label("Email").email(),
    password: Joi.string().required().label("Password").min(4),
  };

  schema = Joi.object(this.schemaModel);

  doSubmit() {
    console.log("Registered.");
  }

  render() {
    return (
      <div className="container col-4">
        <h1 className="mb-3">Sign Up</h1>
        <form className="d-grid gap-3" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            {this.renderInput("firstName", "First Name", "Carlos")}
            {this.renderInput("lastName", "Last Name", "Millet")}
            {this.renderInput("email", "Email", "example@mail.com", "email")}
            {this.renderInput("password", "Password", "", "password")}
          </div>
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Signup;
