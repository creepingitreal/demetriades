import "./ProjectContainer.css";
import ProjectContainer from "./ProjectContainer/ProjectContainer";
import "./Projects.css";


// project container to list all projects in db
// alternate each item in the array with alternating class

function Projects() {
  return (
    <main className="project-container">
        <ProjectContainer className={".project-container-image-right"} />
    </main>
  );
}

export default Projects;
