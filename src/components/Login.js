import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = () => {

  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    // console.log({users})


  const login =()=>{

    // var temp=false;
    const temp = users.find(user=> 
      user.email === email && user.password===password
      )
    if(temp){
      dispatch({
        type : "LOGIN",
        em : email
        // payload : {email},
      })
    }
    else {
      alert("Invalid Credentials")
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          type="text"
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
        <input type="button" value="Login" onClick={() => login()} />

        <button
          onClick={() => {
            history.push("/signup");
          }}
        >
          SignUp
        </button>

        <button
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Dashboard
        </button>
      </form>
    </div>
  );
}

export default Login;