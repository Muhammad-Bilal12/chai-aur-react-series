import React, { useContext } from "react";
import UserContext from "../src/contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <h3>Please Login!</h3>;
  }
  return (
    <div>
      <h2>Weelcome: {user.username}</h2>
      <h2>Password: {user.password}</h2>
    </div>
  );
}

export default Profile;
