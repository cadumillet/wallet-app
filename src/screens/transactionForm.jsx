import Joi from "joi-browser";
import Form from "../atoms/form";
import { getUsers } from "../services/fakeUserService";
import { getTypes } from "../services/fakeTypeService";
import { getTransaction } from "../services/fakeTransactionService";

class TransacionForm extends Form {
  state = {
    data: { description: "", price: "", date: "", userId: "", typeId: "" },
    users: [],
    types: [],
    errors: {},
  };

  schemaModel = {
    description: Joi.string().required().label("Description"),
    price: Joi.number().required().label("Price"),
    date: Joi.string().required().label("Date"),
    userId: Joi.string().required().label("User"),
    typeId: Joi.string().required().label("Type"),
  };

  schema = Joi.object(this.schemaModel);

  componentDidMount() {
    const users = getUsers();
    const types = getTypes();
    const { id } = this.props.match.params;
    if (id === "new") return this.setState({ users, types });

    const data = getTransaction(id);
    this.setState({ data, users, types });
  }

  doSubmit() {
    console.log("Submit");
  }

  render() {
    return (
      <div className="container col-4">
        <h1 className="mb-3">Transacion</h1>
        <form className="d-grid gap-3" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            {this.renderInput("description", "Description", "Restaurante")}
            {this.renderInput("price", "Price", "12.50", "number")}
            {this.renderInput("date", "Date", "06-2022")}
            {this.renderSelect("userId", "User", this.state.users)}
            {this.renderSelect("typeId", "Type", this.state.types)}
          </div>
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default TransacionForm;
