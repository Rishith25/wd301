/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useCommentsDispatch,
  useCommentsState,
} from "../../context/comment/context";
import { addComment, refreshComments } from "../../context/comment/actions";
import { CommentsPayload } from "../../context/comment/types";
import CommentList from "./CommentsList";
const NewComment = () => {
  // let [isOpen, setIsOpen] = useState(true);

  let { projectID, taskID } = useParams();
  let navigate = useNavigate();

  // Use react-hook-form to create form submission handler and state.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentsPayload>();
  //   const commentState = useCommentsState();
  const commentDispatch = useCommentsDispatch();

  const onSubmit: SubmitHandler<CommentsPayload> = async (data) => {
    console.log(data)
    try {
      // Invoke the actual API and create a task.
      addComment(
        commentDispatch,
        projectID ?? "",
        taskID ?? "",
        data
      );
    } catch (error) {
      console.error("Operation failed:", error);
    }
  };
  function closeModal() {
    // setIsOpen(false);
    navigate("../../");
  }
  return (
    <>
      <div className="mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            required
            placeholder="Enter title"
            autoFocus
            id="commentBox  "
            // Register the title field
            {...register("description", { required: true })}
            className="w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
          <button
            type="submit"
            // Set an id for the submit button
            id="addCommentBtn"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Add Comment
          </button>
          <button
            onClick={closeModal}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};
export default NewComment;
