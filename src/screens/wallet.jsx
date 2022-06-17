import React, { Component } from "react";
import _ from "lodash";
import WalletTable from "../components/walletTable";
import Pagination from "../atoms/pagination";
import ListCount from "../components/listCount";
import { getTransactions } from "../services/transactionService";
import { paginate } from "../utils/paginate";

class Wallet extends Component {
  state = {
    transactions: [],
    users: [],
    pageSize: 2,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const transactions = getTransactions();
    const users = ["All", "Cadu", "Moyses"];
    this.setState({ transactions, users });
  }

  handleDelete = (item) => {
    console.log("Deleting...", item);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleUserChange = (selectedUser) => {
    this.setState({ selectedUser });
  };

  getPageData = () => {
    const {
      transactions: allTransactions,
      pageSize,
      currentPage,
      selectedUser,
      sortColumn,
    } = this.state;

    const filtered =
      selectedUser && selectedUser !== "All"
        ? allTransactions.filter((t) => t.user === selectedUser)
        : allTransactions;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const transactions = paginate(sorted, pageSize, currentPage);
    return { data: transactions, count: filtered.length };
  };

  render() {
    const { sortColumn, selectedUser } = this.state;
    const { data, count } = this.getPageData();

    return (
      <div className="container">
        <h1 className="mb-4">Wallet</h1>
        <div className="row">
          <div className="col-3">
            <ListCount
              listItems={this.state.users}
              onItemChange={this.handleUserChange}
              selectedItem={selectedUser}
            />
          </div>
          <div className="col">
            <WalletTable
              data={data}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={sortColumn}
            />
            <Pagination
              currentPage={this.state.currentPage}
              itemsCount={count}
              pageSize={this.state.pageSize}
              data={this.state.transactions}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Wallet;
