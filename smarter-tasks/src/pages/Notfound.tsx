// NotFound.tsx
import React from "react";
import { useTranslation } from "react-i18next";

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 py-3">{t("PageNotFound")}</p>
      <button id="backToHomeButton">
        <a
          href="/"
          className="border border-blue-600 rounded p-1 flex text-lg bg-blue-700 text-white"
        >
          Back to Home
        </a>
      </button>
    </div>
  );
};
export default NotFound;
