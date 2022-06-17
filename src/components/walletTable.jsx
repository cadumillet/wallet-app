import React, { Component } from "react";
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
        <button className="btn btn-light" onClick={() => this.editItem(item)}>
          Edit
        </button>
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

  editItem = (item) => {
    console.log("Editing...", item);
  };

  render() {
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
