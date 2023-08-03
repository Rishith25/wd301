/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}

// interface State {}

const TaskList = (props: Props) => {
  // console.log("TaskList",props.tasks)
  const list = props.tasks.map((task) => (
    <Task
      key={task.id}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      deleteTask={() => props.deleteTask(task.id)}
    />
  ));
  // console.log(list)
  return <>{list}</>;
};

// class TaskList extends React.Component<Props, State> {
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task
//         key={idx}
//         title={task.title}
//         description={task.description}
//         dueDate={task.dueDate}
//       />
//     ));
//   }
// }

// class TaskList extends React.Component<Props, State> {
//     state = {
//         tasks: []
//     }
//     componentDidMount() {
//         const tasks = [{ title: "Pay rent" }, { title: "Submit assignment" }];
//         this.setState((state, props) => ({
//           tasks,
//         }));
//       }
//       render() {
//         return this.state.tasks.map((task, idx) => <Task key={idx} title={task.title} />);
//       }
//   }

export default TaskList;
