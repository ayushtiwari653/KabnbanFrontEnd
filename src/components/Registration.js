import './style.css'
import Registerheader from './Registerheader';
import * as Constants from './Constants';

function RegistrationForm() {
  
 function RegisterPost(){
        const axios = require('axios').default;
        var md5 = require('md5');
        var pass = document.getElementById("p").value;

        axios.post(Constants.CREATE_USER, {
            "userId": 0,
            "firstName": document.getElementById("fN").value,
            "lastName": document.getElementById("lN").value,
            "email": document.getElementById("e").value,
            "password": md5(pass),
            "role": "Team member",
          })
          .then(function (response) {
            console.log(response);
            window.location.href= Constants.BASE_URL;
          })
          .catch(function (error) {
            alert(error);
          });
    }


   function RegisFun(){
        if(document.getElementById("fN").value!=="" && document.getElementById("lN").value!=="" && document.getElementById("p").value!=="" && document.getElementById("cP").value!=="" && document.getElementById("e").value!==""){
            if(document.getElementById("p").value === document.getElementById("cP").value){
                 var valid = document.getElementById("p").value
                 if(valid.length >7){
                    RegisterPost()
                 }
                 else{
                     alert("password length must be greater than seven")
                 }
            }
            else{
                alert("password and Confirm Password should be same")
            }
        }
        else{
            alert("Fields should not be empty")
        }
    }
    return(
     <div>  
         <Registerheader /> 
          <div className="form">
          <div className="form-body">

            {/* <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="fN" placeholder="First Name"/>
              </div> 
              
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lN"  className="form__input"placeholder="LastName"/>
              </div> */}

                 <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="textarea" id="fN" placeholder="First Name"/>
              </div> 
              
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="textarea" name="" id="lN"  className="form__input"placeholder="LastName"/>
              </div> 

              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="e" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="p" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="cP" placeholder="Confirm Password"/>
              </div>
          </div>

          {/* <div class="footer">
              <button type="submit" onClick={RegisFun} class="btn btn-outline-primary btn-sm ml-3">Register</button>
               <a class='btn btn-outline-primary btn-sm mr-3' href="/">Cancel</a>
              
          </div> */}

  <div className="footer">
  <a  type="submit" onClick={RegisFun}  className="btn btn-outline-success btn-sm ml-3">Register</a>&nbsp;&nbsp;&nbsp;
              <a className='btn btn-outline-secondary btn-sm mr-3' href="/">Cancel</a>
              
          </div> 

      </div>      
     </div>
    )       
}
export default RegistrationForm;

