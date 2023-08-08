import { createBrowserRouter, Navigate } from "react-router-dom";

import AccountLayout from "../layouts/account";
import ProtectedRoute from "./ProtectedRoutes";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import Projects from "../pages/projects";
import Members from "../pages/members";
import Logout from "../pages/logout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/notfound",
    element: <NotFound />
  },
  // Protected Routes
  {
    path: "account",
    element: (
      <ProtectedRoute>
        <AccountLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/account/" replace />,
      },
      {
        path: "projects",
        element: (<Projects />),
      },
      {
        path: "members",
        element: <Members />,
      },
    ],
  },
  
]);

export default router;