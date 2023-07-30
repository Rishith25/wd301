/* eslint-disable react/prop-types */
import React from "react";
import "./TaskCard.css";

interface TaskCard {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

let TaskCard = ({
  title,
  dueDate,
  completedAtDate,
  assigneeName,
}: TaskCard) => {
  let date;
  if (dueDate) {
    date = `Due Date: ${dueDate}`;
  } else {
    date = `Completed on: ${completedAtDate}`;
  }
  return (
    <div className="TaskItem">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{date}</p>
      <p>Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
