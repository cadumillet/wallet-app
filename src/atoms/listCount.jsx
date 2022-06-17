import React from "react";

const ListCount = ({ listItems, onItemChange, selectedItem }) => {
  return (
    <ul className="list-group clickable">
      {listItems.map((i) => (
        <li
          key={i}
          className={
            selectedItem === i
              ? "list-group-item d-flex justify-content-between align-items-center active"
              : "list-group-item d-flex justify-content-between align-items-center"
          }
          onClick={() => onItemChange(i)}
        >
          {i}
          {/* <span className="badge rounded-pill text-bg-light">10</span> */}
        </li>
      ))}
    </ul>
  );
};

export default ListCount;
