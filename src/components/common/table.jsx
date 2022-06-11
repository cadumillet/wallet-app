import React, { Component } from "react";
import _ from "lodash";

class Table extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  render() {
    const { thead, tbody } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            {thead.map((c) => (
              <th key={c.path || c.key}>{c.label}</th>
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
