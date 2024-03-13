import React, { Suspense } from "react";
const ProjectListItems = React.lazy(() => import("./ProjectListItems"));
import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";

const ProjectList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ErrorBoundary>
        <Suspense
          fallback={<div className="suspense-loading">{t("Loading...")}</div>}
        >
          <ProjectListItems />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ProjectList;
