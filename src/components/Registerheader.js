import React from 'react';

function Registerheader() {



    return(

        <nav class="bg-dark navbar-dark navbar ">

            {/* <div className="row col-12 d-flex justify-content-between text-white">

                <a href='#'></a>

                <h3>Register to Kanban Board</h3>

                <a class='btn btn-primary' href="/Login">Login</a>

            </div> */}

            <h5 className="navbar-brand">&nbsp;&nbsp;&nbsp;Register to Kanban Board</h5>

    <div class='p-3 float-end'>

       <a class='btn btn-outline-primary btn-sm px-3 ml-2' href="/Login">Login</a>

       </div>

        </nav>

    )

}



export default Registerheader;