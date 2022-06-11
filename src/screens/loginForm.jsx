import React from "react";
import Joi from "joi-browser";
import Form from "../atoms/form";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schemaModel = {
    email: Joi.string().required().label("Email"),
    password: Joi.number().required().label("Password"),
  };

  schema = Joi.object(this.schemaModel);

  doSubmit = () => {
    console.log("Submit");
    // window.location.reload();
  };

  render() {
    return (
      <div className="container col-4">
        <h1 className="mb-3">Login</h1>
        <form className="d-grid gap-3" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            {this.renderInput("email", "Email", "example@email.com")}
            {this.renderInput("password", "Password", "", "password")}
          </div>
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
