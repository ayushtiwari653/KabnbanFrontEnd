import React, { useState } from 'react';
import Delete from './Delete'
import AddCardButton from './AddCardButton';
import Dropdown from 'react-bootstrap/Dropdown';



function HeaderButton() {
  const [open, setOpen] = useState<boolean>(false)
  const [openn, setOpenn] = useState<boolean>(false)
  return (



    <div className='px-4 float-end'>
      <Dropdown>
        <Dropdown.Toggle variant="btn btn-outline-primary btn-sm px-5 my-3 ">
        Menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/Dashboard">
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item href="/About">
            About
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setOpenn(true)}>
            Add Task
          </Dropdown.Item>
          <AddCardButton open={openn} setOpen={setOpenn}></AddCardButton>
          <Dropdown.Item onClick={() => setOpen(true)}>
            Delete
          </Dropdown.Item>
          <Delete open={open} setOpen={setOpen}></Delete>
          <Dropdown.Item href="/ExportExcel">
            Excel Sheet
          </Dropdown.Item>
          <Dropdown.Item href="/Login">
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>



  )
}



export default HeaderButton