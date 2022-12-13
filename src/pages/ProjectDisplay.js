import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();
  return (
    <div className="project" >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>Desc:</b> {project.desc}
      </p>
      <p>
        <b>Click here for more info</b>
      <a href="https://github.com/Abdisheik3" > <GithubIcon /></a>
      </p>
    </div>
  );
}

export default ProjectDisplay;
