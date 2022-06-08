import React from 'react';

function Loginheader() {
    return (
        <nav class="bg-dark navbar-dark navbar ">

            <h5 className="navbar-brand">&nbsp;&nbsp;&nbsp;Login to Kanban Board</h5>

            <div class='p-3 float-end'>

                <a class='btn btn-outline-primary btn-sm px-3 ml-2' href="/Registration">Register</a>

            </div>

        </nav>
    )
}
export default Loginheader;