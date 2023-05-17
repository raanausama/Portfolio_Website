import axios from "axios";
import React from "react";
import { Fragment, useState, useEffect } from "react";

const ListProjects = () => {
  const [projects, setProjects] = useState([]);

  async function getProjects() {
    const myHeaders = {
      "Content-type": "application/json",
      token: localStorage.getItem("token"),
    };
    const response = await axios.get(
      "http://localhost:3001/dashboard/projects",
      {
        headers: myHeaders,
      }
    );

    const projectsArray = await response.data;
    setProjects(projectsArray);
  }

  useEffect(() => {
    getProjects();
  }, []);
  console.log("here");
  console.log(projects);
  return (
    <Fragment>
      <div style={{ color: "black" }}>
        <table class="table">
          <thead>
            <tr>
              <th>Projects</th>
              <th>Descriptions</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr> */}
            {projects.map((project) => (
              <tr>
                <td>{project.project1}</td>
                <td>{project.description1}</td>
              </tr>
            ))}
            {projects.map((project) => (
              <tr>
                <td>{project.project2}</td>
                <td>{project.description2}</td>
              </tr>
            ))}
            {projects.map((project) => (
              <tr>
                <td>{project.project3}</td>
                <td>{project.description3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListProjects;
