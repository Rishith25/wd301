import React, { Suspense } from "react";
const ProjectListItems = React.lazy(() => import("./ProjectListItems"));
import ErrorBoundary from "../../components/ErrorBoundary";

const ProjectList: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectListItems />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default ProjectList;