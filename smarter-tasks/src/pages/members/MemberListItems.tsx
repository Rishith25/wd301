/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/projects/ProjectListItems.tsx

// First, I'll import the useProjectsState custom hook to access projects state.
import { useMembersState, useMembersDispatch } from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";
import { SubmitHandler } from "react-hook-form";
export default function MemberListItems() {
  // I'll define a new constant called `state`, to call the useProjectsState() hook,
  // and get access to projects state.
  let dispatchMembers = useMembersDispatch();
  let state: any = useMembersState();

  type Inputs = {
    id: number;
  }
  console.log(state);
  const { members, isLoading, isError, errorMessage } = state;
  console.log(members);

  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  const deleteMemberid: SubmitHandler<Inputs> = async (data) => {
    const { id } = data;
    const response = await deleteMember(dispatchMembers, id );
    console.log(response);
    if (response.ok) {
      console.log("Removed member");
    } else {
      console.log("Member not removed");
    }
  };

  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
            {member.email}
          </h5>
          <button
          id="delete-member-btn"
          type="submit"
            onClick={() => deleteMemberid({id: member.id})}
            // className="cursor-pointer h-4 w-4 rounded-full my-5 mr-5"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring--500 focus-visible:ring-offset-2"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 fill-red-200 hover:fill-red-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg> */}
            Delete
          </button>
          {/* <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{project.password}</h5> */}
        </div>
      ))}
    </>
  );
}
