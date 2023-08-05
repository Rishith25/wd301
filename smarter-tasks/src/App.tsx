/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
      
    ),
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
// return <RouterProvider router={router} />;
// return (
//   <>
//     <ReactPlayground />
//     <RouterProvider router={router} />
//   </>

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
