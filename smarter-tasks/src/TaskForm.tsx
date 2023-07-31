import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }
  //   inputRef = React.createRef<HTMLInputElement>();
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    if (newTask.title.trim() !== "" && newTask.dueDate.trim() !== "") {
      this.props.addTask(newTask);
      this.setState({ title: "", description: "", dueDate: "" });
    }
  };

  render() {
    return (
      <div className="container mx-auto my-8">
        <form
          onSubmit={this.addTask}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="todoTitle"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="todoTitle"
              value={this.state.title}
              onChange={this.titleChanged}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="todoDescription"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="todoDescription"
              value={this.state.description}
              onChange={this.descriptionChanged}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="todoDueDate"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Due Date
            </label>
            <input
              type="text"
              id="todoDueDate"
              value={this.state.dueDate}
              onChange={this.dueDateChanged}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            id="addTaskButton"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add item
          </button>
        </form>
      </div>
    );
  }
}
export default TaskForm;

//  ref={this.inputRef}
