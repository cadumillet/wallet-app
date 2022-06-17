import React, { Component } from "react";
import _ from "lodash";

class Table extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  raiseSort = (column) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === column) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = column;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { thead, tbody } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            {thead.map((c) => (
              <th
                className="clickable"
                key={c.path || c.key}
                onClick={() => this.raiseSort(c.path)}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody.map((i) => (
            <tr key={i._id} className="align-middle">
              {thead.map((c) => (
                <td key={c.path || c.key}>{this.renderCell(i, c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
