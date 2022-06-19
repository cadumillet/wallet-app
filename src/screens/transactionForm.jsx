import Joi from "joi-browser";
import Form from "../atoms/form";

class TransacionForm extends Form {
  state = {
    data: { description: "", price: "", date: "", user: "", type: "" },
    errors: {},
  };

  schemaModel = {
    description: Joi.string().required().label("Description"),
    price: Joi.number().required().label("Price"),
    date: Joi.string().required().label("Date"),
    user: Joi.string().required().label("User"),
    type: Joi.string().required().label("Type"),
  };

  schema = Joi.object(this.schemaModel);

  componentDidMount() {
    const { id, description, price, date, user, type } =
      this.props.match.params;
    if (id === "new") return;
    const data = { description, price, date, user, type };
    this.setState({ data });
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
            {this.renderInput("user", "User", "Moyses")}
            {this.renderInput("type", "Type", "Alimentação")}
          </div>
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default TransacionForm;
