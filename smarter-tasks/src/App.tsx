import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Signin from "./pages/Signin";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";

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
    path: "notfound",
    element: <NotFound />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "tasks/:id",
        element: <TaskDetailsPage />,
      },
      {
        path: "*",
        element: <Navigate to="/notfound" replace />,
      },
      {
        path: "tasks/*",
        element: <Navigate to="/notfound" replace />,
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

// function App() {
//   return (
//     <div className="App">
//       <TaskList />
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;
