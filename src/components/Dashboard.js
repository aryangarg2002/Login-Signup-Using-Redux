import React from 'react'
// import { useSelector } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';


const Dashboard = () => {
    const users = useSelector((state) => state.users);
    console.log(users);
    console.log(users.length);
  const dispatch = useDispatch();

  let history = useHistory();

    let siz = users.length;
  return (
    <div>
      <h2> Dashboard</h2>
      {users.map((user) => (
        <ul>
          <li>{user.name}</li>
        </ul>
      ))}

      <button
        onClick={() => {
          history.push("/signup");
        }}
      >
        SignUp
      </button>
    </div>
  );
}

export default Dashboard