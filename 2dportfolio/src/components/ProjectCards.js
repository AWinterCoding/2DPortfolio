import { useState } from "react";
import Cards from "./Cards";

const ProjectCard = () =>{

    const [projects, setProject] = useState([
        {itemName: 'Project 1', contributors: 'Contributor', description:'description', iteamLink: 'projectlink', imgLink: 'imglink', alt:"img description1", id: 1},
        {itemName: 'Project 2', contributors: 'Contributor', description:'description', itemLink: 'projectlink', imgLink: 'imglink', alt:"img description2", id: 2},
        {itemName: 'Project 3', contributors: 'Contributor', description:'description', itemLink: 'projectlink', imgLink: 'imglink', alt:"img description3", id: 3},
        {itemName: 'Project 4', contributors: 'Contributor', description:'description', itemLink: 'projectlink', imgLink: 'imglink', alt:"img description4", id: 4}
    ]);

    return(
            <Cards items={projects}/>
    );
}

export default ProjectCard;