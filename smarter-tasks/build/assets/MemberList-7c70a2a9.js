import{u as n,a as g,j as e,d as b,r as h,f as x}from"./index-54e33834.js";function u(){let s=n(),i=g();console.log(i);const{members:t,isLoading:a,isError:d,errorMessage:l}=i;if(console.log(t),t.length===0&&a)return e.jsx("span",{children:"Loading..."});if(d)return e.jsx("span",{children:l});const c=async r=>{const{id:m}=r,o=await b(s,m);console.log(o),o.ok?console.log("Removed member"):console.log("Member not removed")};return e.jsx(e.Fragment,{children:t.map(r=>e.jsxs("div",{className:"member block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700",children:[e.jsx("h5",{className:"mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white",children:r.name}),e.jsx("h5",{className:"mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white",children:r.email}),e.jsx("button",{id:"delete-member-btn",type:"submit",onClick:()=>c({id:r.id}),className:"inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring--500 focus-visible:ring-offset-2",children:"Delete"})]},r.id))})}const p=()=>{const s=n();return h.useEffect(()=>{x(s)},[]),e.jsx("div",{className:"grid gap-4 grid-cols-4 mt-5",children:e.jsx(u,{})})};export{p as default};