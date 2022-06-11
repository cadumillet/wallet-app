import React, { Component } from "react";
import WalletTable from "./walletTable";
import Pagination from "./common/pagination";
import { getTransactions } from "../services/transactionService";

class Wallet extends Component {
  state = {
    transactions: [],
  };

  componentDidMount() {
    const transactions = getTransactions();
    this.setState({ transactions });
  }

  handleDelete = (item) => {
    console.log("Deleting...", item);
  };

  render() {
    return (
      <div className="container">
        <WalletTable
          data={this.state.transactions}
          onDelete={this.handleDelete}
        />
        <Pagination />
      </div>
    );
  }
}

export default Wallet;
