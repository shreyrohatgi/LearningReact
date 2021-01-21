import React, { useState } from "react";
import axios from "axios";

interface CreateUserSchema {
  name?: string;
  job?: string;
  id?: number;
  createdAt?: string;
}

const CreateUser: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [display, getDisplay] = useState<CreateUserSchema>({});

  async function CreateUserHandle() {
    var response = axios.post("https://reqres.in/api/users", {
      name: name,
      job: job,
    });
    if ((await response).status === 201) {
      const data = await response;
      // alert('User Created!')
      console.log(data);
      getDisplay(data.data);
      alert("User Created!");
    }
  }

  return (
    <div className="base-container">
      <div className="header">
        <h3>Create User</h3>
      </div>
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            name="name"
            required
            onChange={(name) => setName(name.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job">Job</label>
          <input
            type="text"
            name="job"
            required
            onChange={(job) => setJob(job.target.value)}
          />
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={CreateUserHandle}>
          Submit
        </button>
      </div>

      <div>
        <table style={{ top: "95%" }}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Job</th>
            <th>Created At</th>
          </tr>
          <tr>
            <td>{display.id}</td>
            <td>{display.name}</td>
            <td>{display.job}</td>
            <td>{display.createdAt}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CreateUser;
