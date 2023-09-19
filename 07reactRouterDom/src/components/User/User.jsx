import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="text-4xl text-white bg-gray-600 h-14 flex items-center justify-center">
      USER: {userid}
    </div>
  );
}

export default User;
