import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/muhammad-bilal12")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  const data = useLoaderData();

  return (
    <div>
      <img src={data.avatar_url} alt="Github Profile" width="200px" />
      <h2>Github Followers : {data.followers} </h2>
    </div>
  );
}

export default Github;

export const githubUserInfo = async () => {
  const response = await fetch("https://api.github.com/users/muhammad-bilal12");
  return response.json();
};
