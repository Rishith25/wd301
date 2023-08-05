import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigator = useNavigate();
  console.log(userData.id); // "1"
  console.log(userData.name); // "Avishek Jana"
  console.log(userData.email); // "avishek@example.com"
  const LogoutHandle = async () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    return navigator("/signin");
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h3 className="text-lg font-medium mb-2">Username: {userData.name}</h3>
        <h3 className="text-lg font-medium mb-2">
          Email-id: {userData.email}.
        </h3>
        <a
          href=""
          id="logout-link"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none"
          onClick={LogoutHandle}
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
