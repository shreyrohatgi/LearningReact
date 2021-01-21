import React, { useState, useEffect } from "react";
import axios from "axios";

interface ResourcesSchema {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

const SingleUser: React.FC = () => {
  const [resources, setResources] = useState<[]>([]);

  async function resourcesGet() {
    var response = axios.get("https://reqres.in/api/unknown");
    if ((await response).status === 200) {
      const data = await response;
      setResources(data.data.data);
    }
  }

  useEffect(() => {
    resourcesGet();
  }, []);

  return (
    <div>
      {resources ? (
        <div>
          <h1 style={{ textAlign: "center" }}>Resources List</h1>
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Color</th>
              <th>Year</th>
              <th>Pantone Value</th>
            </tr>
            {resources.length &&
              resources.map((resource: ResourcesSchema) => (
                <div>
                  <tr>
                    <td>{resource.id}</td>
                    <td>{resource.name}</td>
                    <td>{resource.color}</td>
                    <td>{resource.year}</td>
                    <td>{resource.pantone_value}</td>
                  </tr>
                  {/* <p>Id: {resource.id}</p>
                <p>Name: {resource.name}</p>
                <p>Year: {resource.year}</p>
                <p>Color: {resource.color}</p>
                <p>Pantone Value: {resource.pantone_value}</p> */}
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

export default SingleUser;
