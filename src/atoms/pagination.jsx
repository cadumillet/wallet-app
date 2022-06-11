import React from "react";

const Pagination = () => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a href="/" className="page-link">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a href="/" className="page-link">
              1
            </a>
          </li>
          <li className="page-item">
            <a href="/" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="/" className="page-link">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
