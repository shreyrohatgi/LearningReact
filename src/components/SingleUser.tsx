import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

interface UserSchema {
  id?: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

const SingleUser: React.FC = () => {
  const [user, setUser] = useState<UserSchema>({});

  async function userGet() {
    var response = axios.get("https://reqres.in/api/users/2");
    if ((await response).status === 200) {
      const data = await response;
      console.log(data.data.data);
      setUser(data.data.data);
    }
  }

  useEffect(() => {
    userGet();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Single User</h1>
      {!user.first_name ? (
        <div>No data found </div>
      ) : (
        <div>
          <table>
            <tr>
              <th>Id</th>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
            <tr>
              <td>{user.id}</td>
              <td>
                <img src={user.avatar} />
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
