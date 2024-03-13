import React, { Suspense } from "react";
const MemberList = React.lazy(() => import("./MemberList"));
import NewMember from "./NewMember";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";

const Members = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h3 id="user-name" className="text-lg font-medium mb-2">
          {t("Username")}: {userData.name}
        </h3>
        <h3 id="user-email" className="text-lg font-medium mb-2">
          Email-id: {userData.email}.
        </h3>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium tracking-tight">
            {t("Members")}
          </h2>
          <NewMember />
        </div>
      </div>
      <ErrorBoundary>
        <Suspense
          fallback={<div className="suspense-loading">{t("Loading...")}</div>}
        >
          <MemberList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default Members;
