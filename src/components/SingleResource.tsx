import React, { useState, useEffect } from "react";
import axios from "axios";

interface ResourceSchema {
  id?: number;
  name?: string;
  year?: number;
  color?: string;
  pantone_value?: string;
}

const SingleResource: React.FC = () => {
  const [resource, setResource] = useState<ResourceSchema>({});

  async function resourceGet() {
    var response = axios.get("https://reqres.in/api/unknown/2");
    if ((await response).status === 200) {
      const data = await response;
      console.log(data.data.data);
      setResource(data.data.data);
    }
  }

  useEffect(() => {
    resourceGet();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Single Response</h1>
      {!resource.id ? (
        <div>No data found </div>
      ) : (
        <div>
          <table style={{ top: "35%" }}>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Color</th>
              <th>Year</th>
              <th>Pantone Value</th>
            </tr>
            <tr>
              <td>{resource.id}</td>
              <td>{resource.name}</td>
              <td>{resource.color}</td>
              <td>{resource.year}</td>
              <td>{resource.pantone_value}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default SingleResource;
