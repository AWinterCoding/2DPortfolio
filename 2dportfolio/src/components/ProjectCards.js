import { useState } from "react";

const ProjectCard = () =>{

    const [projects, setProject] = useState([
        {projectName: 'Project 1', contributors: 'Contributor', description:'description', projectLink: 'projectlink', imgLink: 'imglink', alt:"img description1", id: 1},
        {projectName: 'Project 2', contributors: 'Contributor', description:'description', projectLink: 'projectlink', imgLink: 'imglink', alt:"img description2", id: 2},
        {projectName: 'Project 3', contributors: 'Contributor', description:'description', projectLink: 'projectlink', imgLink: 'imglink', alt:"img description3", id: 3},
        {projectName: 'Project 4', contributors: 'Contributor', description:'description', projectLink: 'projectlink', imgLink: 'imglink', alt:"img description4", id: 4}
    ]);

    return(
        <div className="projectList">
            {projects.map((project) => (
                <div className="projectCard" key={project.id}>
                <img src={project.imgLink} alt={project.alt}/>
                <h3>{project.projectName}</h3>
                <h4>{project.contributors}</h4>
                <p>{project.description}</p>
                <a><p>{project.projectLink}</p></a>
                </div>
            ))}
        </div>
    );
}

export default ProjectCard;