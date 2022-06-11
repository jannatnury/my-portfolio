import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetails = ({ project }) => {

    const {id, img, type, title, description } = project;
    console.log(project);

    return (
        <div className="col-xl-4 col-md-6 text-start mx-auto">
            <div className="p-2 h-100">
                <div className="d-flex flex-column box justify-content-between bg-white h-100 rounded-10 shadow">
                    <div>
                        <img className="img-fluid rounded-t-10" src={img} alt="painting" />
                        <div className="px-4">
                            <h4>{title}</h4>
                            <small className="text-second">{type}</small>
                        </div>
                    </div>
                    <div className="px-4">
                        <p className="mb-0 mt-3 text-second">Details: <span className="text-dark">{description}</span></p>

                    </div>
                    <div className=" pb-4 pt-1 ps-4 mt-2">
                        <Link className="button " to={`/projects/${id}`}>View Details <i className="ps-1 fas fa-info-circle"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;