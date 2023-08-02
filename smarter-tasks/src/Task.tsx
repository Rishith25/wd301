/* eslint-disable @typescript-eslint/no-unused-vars */
// class Task extends React.Component {}

// import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

// interface TaskProp{
//   tasks: TaskItem[];
//   deleteTask: (id: number) => void;
// }

const Task = (props: TaskItem) => {
  // const [formState, setFormState] = React.useState<TaskProp>({
  //   title: "",
  //   description: "",
  //   dueDate: "",
  //   id: 0,
  //   deleteTask

  // });
  return (
    <li>
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{props.title}</h2>
        <p className="text-sm text-slate-500">Due on: {props.dueDate}</p>
        <p className="text-sm text-slate-500 py-2">
          Description: {props.description}
        </p>
        <div className="relative z-0 w-full mb-6 group">
          <button
            className="text-white rounded-lg text-sm px-5 py-2.5 bg-red-600 dark:hover:bg-red-700 inline-block"
            type="button"
            id="deleteTaskButton"
            onClick={props.deleteTask}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

// class Task extends React.Component<TaskProp> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100">
//         <h2 className="text-base font-bold my-1">{this.props.title}</h2>
//         <p className="text-sm text-slate-500">Due on: {this.props.dueDate}</p>
//         <p className="text-sm text-slate-500">
//           Description: {this.props.description}
//         </p>
//       </div>
//     );
//   }
// }

export default Task;
