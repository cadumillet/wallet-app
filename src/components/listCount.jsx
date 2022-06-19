import React from "react";

const ListCount = ({ listItems, onItemChange, selectedItem, totalCount }) => {
  return (
    <ul className="list-group clickable">
      <li
        className={
          selectedItem === "All"
            ? "list-group-item d-flex justify-content-between align-items-center active"
            : "list-group-item d-flex justify-content-between align-items-center"
        }
        onClick={() => onItemChange("All")}
      >
        All
        <span className="badge rounded-pill text-bg-light">{totalCount}</span>
      </li>
      {listItems.map((i) => (
        <li
          key={i._id}
          className={
            selectedItem === i.name
              ? "list-group-item d-flex justify-content-between align-items-center active"
              : "list-group-item d-flex justify-content-between align-items-center"
          }
          onClick={() => onItemChange(i.name)}
        >
          {i.name}
          {/* <span className="badge rounded-pill text-bg-light">10</span> */}
        </li>
      ))}
    </ul>
  );
};

export default ListCount;
