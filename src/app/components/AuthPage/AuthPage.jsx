import React from "react";
import "./AuthPage.css";

import Left from "./Left/Left";
import Right from "./Right/Right.jsx";

const AuthPage = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Left />

            <Right />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
