import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Abdiaziz Sheikh</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <br></br>
          <a href="https://www.linkedin.com/in/abdiaziz-sheikh/" > <LinkedInIcon/></a>
          <a href="https://github.com/Abdisheik3" > <GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, React.js, 
              BootStrap, MaterialUI,
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring,  ExpressJS, 
              MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
