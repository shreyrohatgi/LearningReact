import React, { useState, useEffect } from "react";
import axios from "axios";

interface UserListSchema {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<[]>([]);

  async function usersGet() {
    var response = axios.get("https://reqres.in/api/users?page=2");
    if ((await response).status === 200) {
      const data = await response;
      setUsers(data.data.data);
    }
  }

  useEffect(() => {
    usersGet();
  }, []);

  return (
    <div>
      {users ? (
        <div>
          <h1 style={{ textAlign: "center" }}>Users List</h1>
          <table style={{ top: "87%" }}>
            <tr>
              <th>Id</th>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
            {users.length &&
              users.map((user: UserListSchema) => (
                <div>
                  <tr>
                    <td>{user.id}</td>
                    <td>
                      <img src={user.avatar} />
                    </td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                  </tr>
                </div>
              ))}
          </table>
        </div>
      ) : (
        <div>Not Found !!</div>
      )}
    </div>
  );
};

export default UsersList;
