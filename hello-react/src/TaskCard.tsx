/* eslint-disable react/prop-types */
import React from "react";
import "./TaskCard.css";

interface TaskCardInterface {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard = ({
  title,
  dueDate,
  completedAtDate,
  assigneeName,
}: TaskCardInterface) => {
  let date;
  if (dueDate) {
    date = `Due on: ${dueDate}`;
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
