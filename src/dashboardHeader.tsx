//import React from 'react'
import React, { useState } from 'react';
import SimpleDialog from './AddProjectButton';
//import AddProjectButton from './AddProjectButton.tsx'; 



function DashboardHeader() {

    //const [openn, setOpenn] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    //const [open, setOpen] = useState;

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
    <h5 className="navbar-brand">&nbsp;&nbsp;&nbsp;Kanban Board</h5>
    <div className='p-3 float-end'>
       {/* <a className='btn btn-outline-primary btn-sm px-3 ml-2' href="#">Add Project</a>&nbsp;&nbsp; */}
       <a className='btn btn-outline-primary btn-sm px-3 ml-2' onClick={() => setOpen(true)}>Add Project</a>&nbsp;&nbsp;
       
        <SimpleDialog open={open} setOpen={setOpen}></SimpleDialog> 
       <a className='btn btn-outline-primary btn-sm px-3' href="/Login">Logout</a>
       </div>
  </nav>
  )

}



export default DashboardHeader;