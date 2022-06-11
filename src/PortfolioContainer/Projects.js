import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
    const [projects, setProjects]=useState([]);
    useEffect(()=>{
        fetch('projects.json')
        .then(res=> res.json())
        .then(data=> setProjects(data));
        
    },[]);
    // console.log(projects);
    return (
        <div className='mt-4'>
            <h1 className='text-center'>My Projects</h1>
            <div className="row container m-auto">
                    {
                        projects.map(project=>
                        <ProjectDetails key={project.id} project={project}></ProjectDetails>
                        )
                    }
            </div>
        </div>

    );
};

export default Projects;