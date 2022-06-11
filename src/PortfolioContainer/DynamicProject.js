import React, { useEffect, useState } from 'react';

const DynamicProject = ({project}) => {
    const {id,img,title,name,description}=project;
    console.log(project);
    return (
        <div className='row container ms-auto my-5 m-auto d-flex align-items-center'>
           
        <div className="col-12 col-lg-6">
            <img className='img-fluid me-4' src={img} alt="" />
        </div>
        <div className="col-12 col-lg-6 shadow p-4">
            <h2>Name:{name}</h2>
            <p>Details:{description}</p>
            <form>
                <div className='mb-2'>
                    <label htmlFor='update'>Update Stock</label>
                    <div>
                        <input className='w-100'
                            type='text' name="shipped" placeholder='Enter number'
                            required
                        />
                    </div>
                </div>
                <input type="submit" className='btn btn-dark d-block w-100' value="order" />
            </form>
        </div>
    </div>
    );
};

export default DynamicProject;