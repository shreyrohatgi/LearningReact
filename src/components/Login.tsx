import React, { useState } from "react";
import "./style.css";
import axios from "axios";

interface Props {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Props> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleLogin() {
    var response = axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    console.log(response);
    if ((await response).status === 200) {
      const data = await response;
      alert("Login Successful");
      console.log(data);
      console.log(response);
      props.setIsLoggedIn(true);
    } else {
      alert("User Not Found!");
      console.log(response);
    }
  }

  return (
    <form>
      <div className="base-container">
        <div className="header">Login</div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(email) => setEmail(email.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={(password) => setPassword(password.target.value)}
              required
            />
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
