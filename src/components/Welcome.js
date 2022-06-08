import './style.css'

import Welcomeheader from './Welcomeheader';



function Welcome() {




    return(



      <div>

          <Welcomeheader />

          <div className='mt-5 pt-6'>

          <div className="mt-5">

          <h1 className="heading">Welcome to Kanban Board</h1>

          </div>

          <div className="container mt-5 overflow-hidden">

              <div className='row g-1'id="We">

                  <div className="col-sm-2">

                      <a className='btn btn-outline-primary btn-sm px-5' href="/Login">Login</a>  

                  </div>

                  <div className="col-sm-3">

                  <a className='btn btn-outline-dark btn-sm btn-block px-5' href="/Registration">Registration</a>

                  </div>

              </div>

          </div>

      </div>

      </div>

         

    )      

}

export default Welcome;