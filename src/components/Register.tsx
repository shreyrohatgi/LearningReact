import React, { useState } from "react";
import "./style.css";
import axios from "axios";

interface Props {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register: React.FC<Props> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  async function handleRegister() {
    if (password != password2) {
      alert("password do not match!");
    }

    var response = axios.post("https://reqres.in/api/register", {
      email: email,
      password: password,
    });
    if ((await response).status === 200) {
      const data = await response;
      alert("Registered Successfully!!");
      console.log(data);
      console.log(response);
    } else {
      console.log(response);
      alert("response");
    }
  }

  return (
    <form>
      <div className="base-container">
        <div className="header">Register</div>
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
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password"
              placeholder="confirm password"
              onChange={(password2) => setPassword2(password2.target.value)}
              required
            />
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
