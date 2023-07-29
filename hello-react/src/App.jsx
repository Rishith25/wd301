/* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="center">
      <h1 className="flex p-4 font-bold text-4xl">Smarter Tasks</h1>
      <p className="flex p-5 font-bold text-sm">Project: Graduation FInal Year Project (Revamp College Website)</p>
      <div className="md:flex justify-center md:h-full">
        <div className=" p-5 border border-gray-500 m-4 rounded-lg">
          <h1 className="p-3 text-center">Pending</h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />
          <button className="">+ Add Task</button>
        </div>
        <div className="w-1/2 p-4 border border-gray-500 m-4 rounded-lg">
          <h1 className="p-3 text-center">Done</h1>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

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
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// function App() {
//   // (i)
//   // let message = "Bye there"
//   // if (Math.random() > 0.5) {
//   //   message = "Hello there"
//   // }
//   // (ii)
//   // const message = true or flase or null or undefined will not be shown as react doesnot how to handle it
//   // (iii)
//   // const message = [1,2,3,4,5]
//   // (iv)
//   // const message = {}
//   // return (
//   //   <h1>{message}</h1>
//   // )
// }

export default App;
