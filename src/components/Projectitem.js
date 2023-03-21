import React from "react";

const ProjectItem=({image,name,skills})=>{
    return(
        <div className="projectItem">
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"/>
        <h1>{name}</h1>
        <h2>{skills}</h2>
        </div>
    );
}

export default ProjectItem;