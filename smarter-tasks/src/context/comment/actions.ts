// Import required type annotations
import { API_ENDPOINT } from "../../config/constants";
import {
  // CommentsPayload,
  CommentAvailableAction,
  CommentsDispatch,
} from "./types";

// The function will take a dispatch as first argument, which can be used to send an action to `reducer` and update the state accordingly
export const addComment = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string,
  comment: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    // dispatch({ type: CommentAvailableAction.CREATE_COMMENT_SUCCESS, payload:  });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({description: comment}),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create comment");
    }

    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    dispatch({ type: CommentAvailableAction.CREATE_COMMENT_SUCCESS });
    getComments(dispatch, projectID, taskID);
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentAvailableAction.CREATE_COMMENT_FAILURE,
      payload: "Unable to create comment",
    });
  }
};

// Getcomments
export const getComments = async (
  dispatch: CommentsDispatch,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentAvailableAction.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json();
    console.log("Hello",data)
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });

    // extract the response body as JSON data
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentAvailableAction.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load comments",
    });
  }
};

// export const deleteTask = async (
//   dispatch: CommentsDispatch,
//   projectID: string,
//   task: TaskDetails
// ) => {
//   const token = localStorage.getItem("authToken") ?? "";
//   try {
//     dispatch({ type: CommentAvailableAction.DELETE_TASKS_REQUEST });
//     const response = await fetch(
//       `${API_ENDPOINT}/projects/${projectID}/tasks/${task.id}`,
//       {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(task),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to delete task");
//     }
//     dispatch({ type: CommentAvailableAction.DELETE_TASKS_SUCCESS });
//     refreshTasks(dispatch, projectID);
//   } catch (error) {
//     console.error("Operation failed:", error);
//     dispatch({
//       type: CommentAvailableAction.DELETE_TASKS_FAILURE,
//       payload: "Unable to delete task",
//     });
//   }
// };

// export const updateTask = async (
//   dispatch: CommentsDispatch,
//   projectID: string,
//   task: TaskDetails
// ) => {
//   const token = localStorage.getItem("authToken") ?? "";
//   try {
//     // Display loading status
//     dispatch({ type: CommentAvailableAction.UPDATE_TASK_REQUEST });
//     const response = await fetch(
//       `${API_ENDPOINT}/projects/${projectID}/tasks/${task.id}`,
//       {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(task),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to update task");
//     }
//     // Display success and refresh the tasks
//     dispatch({ type: CommentAvailableAction.UPDATE_TASK_SUCCESS });
//     refreshTasks(dispatch, projectID);
//   } catch (error) {
//     console.error("Operation failed:", error);
//     // Display error status
//     dispatch({
//       type: CommentAvailableAction.UPDATE_TASK_FAILURE,
//       payload: "Unable to update task",
//     });
//   }
// };
