import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate;
  return (
    <div className="w-full h-screen bg-zinc-50 flex justify-center items-center">
      <h1 className="text-5xl font-semibold">404 Page Not Found</h1>
      <Link
        className="py-2 px-6 border-2 border-red-300 hover:bg-red-300"
        to={navigate("/")}
      >
        Go To Home
      </Link>
    </div>
  );
};

export default Error;
