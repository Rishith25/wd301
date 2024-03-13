/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { CommentsProvider } from "./context/comment/context";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import "./i18n";

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      {/* {theme} */}
      <ProjectsProvider>
        <MembersProvider>
          <CommentsProvider>
            <RouterProvider router={router} />
          </CommentsProvider>
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};
export default App;
