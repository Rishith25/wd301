/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

// First, I'll import the useProjectsState custom hook to access projects state.
import {
  useMembersState,
  useMembersDispatch,
} from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";
import { SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function MemberListItems() {
  const { t } = useTranslation();
  let dispatchMembers = useMembersDispatch();
  let state: any = useMembersState();

  type Inputs = {
    id: number;
  };
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
    const response = await deleteMember(dispatchMembers, id);
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
            onClick={() => deleteMemberid({ id: member.id })}
            // className="cursor-pointer h-4 w-4 rounded-full my-5 mr-5"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring--500 focus-visible:ring-offset-2"
          >
            {t("Delete")}
          </button>
          {/* <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{project.password}</h5> */}
        </div>
      ))}
    </>
  );
}
