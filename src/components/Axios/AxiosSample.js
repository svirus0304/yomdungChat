import React, { Fragment,useState } from "react";
import axios from "axios";

const AxiosSample = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    setUsers([]);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    setUsers(response.data);
  };
  return (
    <Fragment>
      <h2>Axios</h2>
      <button onClick={fetchUsers}>누름</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default AxiosSample;
