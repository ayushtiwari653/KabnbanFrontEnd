import React from 'react'
import Dialog from '@mui/material/Dialog';
import * as Constants from './components/Constants';

export default function Delete(props: any) 
{
    const { setOpen, selectedValue, open } = props;

    const handleClose = () => {
        setOpen(false);
    };

    const refreshPage = ()=>{
        window.location.reload();
     }

    async function DeletePost() {
        
        const axios = require('axios').default;
        try {
            const input = document.getElementById('idtask') as HTMLInputElement | null;

            console.log(document.getElementById("idtask") as HTMLElement)
            if (input != null) {
                console.log(input.value);
                const { data } = await axios.post(Constants.DELETE_TASK_BY_ID + input.value);
                    refreshPage() 
            }


        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error)

            } else {
                alert(error)
            }
        }

    }



    return (
        <Dialog onClose={handleClose} open={open}>
            <div className='container'>
                <div className="row">
                    <div className="col-25">
                        <label>Task Id</label>
                    </div>
                    <div className="col-75">
                        <input id='idtask' name='TASK_ID' type="text" />
                    </div>
                    <div>
                        <button className='Task_Button' type='submit' onClick={DeletePost}>Delete</button>
                    </div>
                </div>
            </div>


        </Dialog>
    );
}