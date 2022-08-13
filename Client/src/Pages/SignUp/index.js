import React from "react";
import "./index.css";
import image from "./signup.png"
import { Grid ,TextField} from "@mui/material";
const index = () => {
  return (
    
    <div className="singup" >
    
  
      <section className="main" >
      <div className="form_wrapper">
          <div className="form_wrap">
            <div className="form_fild signup_form">
              <div className="input_group">
                <input
                  type="email"
                  className="input"
                  placeholder="Email Address"
                />
              </div>
              <div className="input_group">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
              </div>

              <div className="input_group">
                <input
                  type="password"
                  className="input"
                  placeholder="Confirm Password"
                />
              </div>

              <input type="submit" className="btn" value="Next" onClick={()=>window.location.href="/user-type"} />
            </div>
          </div>
        </div>
    
   
      </section>
     
    </div>
  );
};

export default index;
