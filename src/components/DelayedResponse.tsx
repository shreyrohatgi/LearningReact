import React, { useState, useEffect } from "react";
import axios from "axios";

interface DelayedSchema {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const DelayedResponse: React.FC = () => {
  const [delayedResponse, setDelayedResponse] = useState<[]>([]);

  async function delayedGet() {
    var response = axios.get("https://reqres.in/api/users?delay=3");
    if ((await response).status === 200) {
      const data = await response;
      setDelayedResponse(data.data.data);
    }
  }

  useEffect(() => {
    delayedGet();
  }, []);

  return (
    <div>
      {delayedResponse ? (
        <div>
          <h1 style={{ textAlign: "center" }}>Delayed List</h1>
          <table style={{ top: "90%" }}>
            <tr>
              <th>Id</th>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
            {delayedResponse.length &&
              delayedResponse.map((delay: DelayedSchema) => (
                <div>
                  <tr>
                    <td>{delay.id}</td>
                    <td>
                      <img src={delay.avatar} />
                    </td>
                    <td>{delay.first_name}</td>
                    <td>{delay.last_name}</td>
                    <td>{delay.email}</td>
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

export default DelayedResponse;
