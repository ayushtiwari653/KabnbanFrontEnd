import Dialog from '@mui/material/Dialog';
import React from 'react';
import './button.css';
import * as Constants from './components/Constants';

const emails = ['username@gmail.com', 'user02@gmail.com'];



export default function SimpleDialog(props: any) {
    const { setOpen, selectedValue, open } = props;

    const handleClose = () => {
        setOpen(false);
    };

    const AddProject = (e: any) => {
        let pName :string= (document.getElementById('PROJECTNAME') as HTMLInputElement).value;
        let pDesc:string = (document.getElementById('PROJECTDESCRIPTION') as HTMLInputElement).value;
        let cBy:string = (document.getElementById('CREATEDBY') as HTMLInputElement).value;
        
        const axios = require('axios').default;
        const params = {
            "pojectId": 0,
            "projectName": pName+"",
            "projectDescription": pDesc+"",
            "createdBy": cBy+"",
        }

        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            accept: { "accept": "*/*" }
        };
        
        axios.post(Constants.CREATE_PROJECT, params)
          .then(function (response:any) {
            window.location.href= Constants.REDIRECTING_URL + "dashboard";
          })
          .catch(function (error:any) {
            alert("Incorect Username and Password");
          });

    }

    return (
        <Dialog onClose={handleClose} open={open}>
            <div className='container'>
                <div className="row">
                    <div className="col-30">
                        <label >Project Name :</label>
                    </div>
                    <div className="col-70">
                        <input name='PROJECT_NAME' id='PROJECTNAME' placeholder='Project Name...' type="text" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-30">
                        <label >Project Description :</label>
                    </div>
                    <div className="col-70">
                        <input name='PROJECT_DESCRIPTION' id='PROJECTDESCRIPTION' placeholder='Project Description...' type="text" required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-30">
                        <label >Created By :</label>
                    </div>
                    <div className="col-70">
                        <input name='CREATED_BY' id='CREATEDBY' placeholder='Created By...' type="text" required />
                    </div>
                </div>
                <div>
                    <a className='btn btn-outline-success btn-sm px-5 float-end mt-3' onClick={AddProject}>Save</a>
                </div>
            </div>
        </Dialog>
    );
}


