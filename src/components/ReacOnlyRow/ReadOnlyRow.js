import { Icon } from "components";
import React from "react";
import { Fragment } from "react";

const ReadOnlyRow = ({ column, handleEditAbleRow, handleDeleteRow }) => {
  return (
    <Fragment>
      <div>{column.title}</div>
      <div>{column.date}</div>
      <div>{column.assigned}</div>
      <div>{column.status}</div>
      <div>{column.priority}</div>
      <div style={{ width: "150%" }}>{column.comment}</div>
      <div className="flex" style={{ display: "flex", marginLeft: "50%" }}>
        <div onClick={(event) => handleEditAbleRow(event, column)}>
          <Icon name={"Mode"} width={30} height={20} />
        </div>
        <div onClick={(event) => handleDeleteRow(event, column)}>
          <Icon name={"delete"} width={30} height={20} />
        </div>
      </div>
    </Fragment>
  );
};

export default ReadOnlyRow;
