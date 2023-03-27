import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";


const SignUp = () => {

  let history = useHistory();

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const dispatch = useDispatch()

  const userAction = () => {
    return {
      type: "REGISTER",
      payload: { name, email, password },
      em : name
    };
  };

  return (
    <div>
      <h2>New User ? Sign Up</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="button"
          value="Register"
          onClick={() => dispatch(userAction())}
        />
        <button
          onClick={() => {
            history.push("/");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default SignUp