import React, { useState } from "react";
import axios from "axios";

const Modify: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");

  async function UpdateHandler() {
    var response = axios.put("https://reqres.in/api/users/2");
    if ((await response).status === 200) {
      const data = await response;
      alert("User updated !!");
      console.log(data);
    }
  }

  async function DeleteHandler() {
    var response = axios.delete("https://reqres.in/api/users/2");
    if ((await response).status === 204) {
      const data = await response;
      alert("User Deleted !!");
      console.log(data);
    }
  }

  return (
    <div className="base-container">
      <div className="header">Update</div>
      <div className="footer">
        <button type="submit" className="btn" onClick={UpdateHandler}>
          Update
        </button>
      </div>
      <div className="header">Delete</div>
      <div className="footer">
        <button type="submit" className="btn" onClick={DeleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Modify;
