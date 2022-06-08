import Dialog from '@mui/material/Dialog';
import React, { useState } from 'react';
import './button.css';
import * as Constants from './components/Constants';
import Dropdown from 'react-bootstrap/Dropdown';
import { Console } from 'console';



const emails = ['username@gmail.com', 'user02@gmail.com'];

const options = [
  {
    label: "Backlog",
    taskStatusId: "1",
  },
  {
    label: "ToDo",
    taskStatusId: "2",
  },

  {
    label: "InProgress",
    taskStatusId: "3",
  },

  {
    label: "Testing",
    taskStatusId: "4",
  },

  {
    label: "Done",
    taskStatusId: "5",
  }
];

export default function SimpleDialog(props: any) {
  const { setOpen, selectedValue, open } = props;

  const handleClose = () => {
    setOpen(false);
  };
  const [SelectOption, setValue] = useState();

  const handleChange = (e: any) => {
    setValue(e.target.value);

  };

  const AddTask = (e: any) => {
    //alert(e.target.value) taskStatusId
    //var myInt = parseInt((document.getElementById('taskStatusId') as HTMLInputElement).value);
    var myInt = parseInt((document.getElementById('task_StatusId') as HTMLInputElement).value);

    fetch(Constants.CREATE_TASK, {

      method: "POST",

      body: JSON.stringify({
        tId: e.target.TASK_ID.value,
        pId: e.target.Project_ID.value,
        assignTo: e.target.assignto.value,
        taskDetails: e.target.TASK_Detail_ID.value,
        //taskStatusId: e.target.TASK_STATUS_ID.value,
        taskStatusId: myInt,
        assignBy: e.target.ASSIGNED_BY.value
      }),

      headers: {

        "Content-type": "application/json; charset=UTF-8"

      }

    })
      .then(response => handleClose)
      .then(data => console.log(data));

  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className='container'>
        <form onSubmit={AddTask}>
          <div className="row">
            <div className="col-25">
              <label hidden>Task Id</label>
            </div>
            <div className="col-75">
              <input name='TASK_ID' value={0} type="text" hidden />
            </div>
          </div>
          <div className="row col-12">
            <div className="col-5">
              <label >Project Id</label>
            </div>
            <div className="col-7">
              <input name='Project_ID' placeholder='Type Project ID...' type="text" required />
            </div>
          </div>
          <br></br>
          <div className="row col-12">
            <div className="col-5">
              <label >Task Details</label>
            </div>
            <div className="col-7">
              <input name='TASK_Detail_ID' placeholder='Task Detail...' type="text" required />
            </div>
          </div>
          <br></br>
          <div className="row col-12">
            <div className="col-5">
              <label>Assign To</label>
            </div>
            <div className="col-7">
              <input name='assignto' placeholder='Type Assign To...' type="text" required />
            </div>
          </div>
          <br></br>
          <div className="row col-12">
            <div className="col-5">
              <label >Status Id</label>
            </div>
            <div className="select-container col-7" >
              <select>
                <option>Please Select</option>
                {options.map((option) => (
                  // <option id='taskStatusId' value={option.taskStatusId}>{option.label}</option>
                  <option id='task_StatusId' value={option.taskStatusId}>{option.label}</option>
                ))}
              </select>
            </div>
            {/* <div className="col-7">
              <input name='TASK_STATUS_ID' placeholder='Task Status Id...' type="text" required/>
            </div> */}
          </div>
          <br></br>
          <div className="row col-12">
            <div className="col-5">
              <label>Assign By</label>
            </div>
            <div className="col-7">
              <input name='ASSIGNED_BY' placeholder='Assign By...' type="text" required />
            </div>
          </div>
          <div>
            <br></br>
            <button className='btn btn-outline-success' type='submit'>ADD TASK</button>
          </div>
        </form>
      </div>
    </Dialog>
  );
}


