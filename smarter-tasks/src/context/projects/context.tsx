/* eslint-disable react-refresh/only-export-components */
// src/context/projects/context.tsx

// First, I'll import the createContext, useContext and useReducer from React

import React, { createContext, useContext, useReducer } from "react";

// I'll import the reducer, initialState, ProjectsState and ProjectsActions 
// from the reducer.ts file

import { reducer, initialState, ProjectsState, ProjectsActions } from "./reducer";

// Next, using createContext function, we will create a context for
// `Projects State` object. The shape of this new context object is 
// ProjectsState and here I've set the default value to undefined.
export const useProjectsState = () => useContext(ProjectsStateContext);

const ProjectsStateContext = createContext<ProjectsState | undefined>(undefined);

// export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  
//   const [state, dispatch] = useReducer(reducer, initialState);

// Next, I'll define our ProjectsProvider component, and make this 
// ProjectsStateContext available using context Provider.

// export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({ children }) => 
// {

// Here, I'll use the useReducer hook to manage state. I've passed the `reducer`  
// function and the `initialState` that I've defined in the reducer.ts file.

//   const [state, dispatch] = useReducer(reducer, initialState);

// Then, I'll pass the `state` object as value of this ProjectsStateContext

//   return (
//     <ProjectsStateContext.Provider value={state}>
//       {children}
//     </ProjectsStateContext.Provider>
//   );
// };
type ProjectsDispatch = React.Dispatch<ProjectsActions>;

// Using createContext function, we will create a context 
// called `ProjectsDispatchContext`. Let's say the shape of this new 
// context object is ProjectsDispatch (which I'll define now, wait for it).
// I've set the default value to undefined.

export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);

const ProjectsDispatchContext = createContext<ProjectsDispatch | undefined>(undefined);
export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Next, I'll pass the `dispatch` object as value of this ProjectsDispatchContext.

return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
};