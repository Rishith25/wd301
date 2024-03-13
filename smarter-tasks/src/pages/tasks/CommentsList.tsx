import { useState } from "react";
import { useCommentsState } from "../../context/comment/context";
import { useMembersState } from "../../context/members/context";
import { useTranslation } from "react-i18next";

const CommentList = () => {
  const { t } = useTranslation();
  const [use24HourFormat, setUse24HourFormat] = useState(true);

  const commentState = useCommentsState();
  const memberState = useMembersState();

  const { comments, isLoading, isError, errorMessage } = commentState;
  console.log("Comments List", comments);
  const getusername = (userid: number) => {
    const username = memberState?.members?.filter(
      (member) => member.id === userid
    )?.[0];
    return username?.name;
  };

  const toggleTimeFormat = () => {
    setUse24HourFormat(!use24HourFormat); // Toggle between 24-hour and 12-hour formats
  };

  if (comments.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const formatDate = (isoDate: string, use24HourFormat: boolean) => {
    const dateObj = new Date(isoDate);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    let hours = String(dateObj.getHours()).padStart(2, "0");
    let minutes = String(dateObj.getMinutes()).padStart(2, "0");
    let period = "";

    if (!use24HourFormat) {
      // Convert to 12-hour format
      period = hours >= 12 ? "PM" : "AM";
      hours = String(parseInt(hours, 10) % 12 || 12);
      minutes = String(minutes);
    }

    return `${day}-${month}-${year} ${hours}:${minutes} ${period}`;
  };

  return (
    <>
      <h1 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
        {t("Comments")}:
      </h1>
      {/* Toggle button */}
      <label htmlFor="timeFormatToggle" className="cursor-pointer relative">
        <input
          type="checkbox"
          id="timeFormatToggle"
          checked={use24HourFormat}
          onChange={toggleTimeFormat}
          className="sr-only"
        />
        <div
          className={`w-16 h-8 bg-gray-300 rounded-full shadow-inner ${
            use24HourFormat ? "bg-green-400" : "bg-blue-400"
          } p-1 duration-200 ease-in-out`}
          // tabIndex="0"
        >
          <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform ${
              use24HourFormat ? "translate-x-0" : "translate-x-8"
            } transition-transform duration-200 ease-in-out`}
          />
        </div>
        <span className="ml-2 text-gray-600 font-medium">
          {use24HourFormat ? "24 hr" : "12 hr"}
        </span>
      </label>
      {/* Comments list */}
      {comments.map((comment) => (
        <div key={comment.createdAt} className="comment flex justify-between">
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {getusername(comment.owner)}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {formatDate(comment.createdAt, use24HourFormat)}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-black">
            {comment.description}
          </h5>
        </div>
      ))}
    </>
  );
};

export default CommentList;
