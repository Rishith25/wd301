import { CommentAvailableAction, CommentsState, CommentActions } from "./types";

// Define the initial state
export const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export const commentReducer = (
  state: CommentsState = initialState,
  action: CommentActions
): CommentsState => {
  switch (action.type) {
    case CommentAvailableAction.FETCH_COMMENTS_REQUEST:
    return { ...state, isLoading: true };
    case CommentAvailableAction.FETCH_COMMENTS_SUCCESS:
      return { ...state, isLoading: false };
    case CommentAvailableAction.CREATE_COMMENT_SUCCESS:
      return { ...state, isLoading: false, comments: [...state.comments, action.payload]};
    case CommentAvailableAction.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};