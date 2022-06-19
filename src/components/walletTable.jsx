import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "../atoms/table";

class WalletTable extends Component {
  columns = [
    { path: "description", label: "Description" },
    { path: "price", label: "Price" },
    { path: "date", label: "Date" },
    { path: "user", label: "User" },
    { path: "type", label: "Type" },
    {
      key: "edit",
      content: (item) => (
        <Link
          to={`/transactions/${item._id}/${item.description}/${item.price}/${item.date}/${item.user}/${item.type}`}
        >
          <button className="btn btn-light">Edit</button>
        </Link>
      ),
    },
    {
      key: "delete",
      content: (item) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(item)}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    if (this.props.data.length === 0) return null;
    return (
      <div>
        <Table
          thead={this.columns}
          tbody={this.props.data}
          onSort={this.props.onSort}
          sortColumn={this.props.sortColumn}
        />
      </div>
    );
  }
}

export default WalletTable;
