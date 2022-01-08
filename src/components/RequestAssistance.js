import React from 'react'
import { getLoginState } from './firebase'

const RequestAssistance = () => {
    const loginState = getLoginState()
    return (
        <div className='max-vw-100 min-vh-100 bg-custom d-flex justify-content-center align-items-center'>
            <div className="row justify-content-center">
            <div
                className="col-md-6 col-lg-4 wow bounceInUp"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="c-box">                  
                  <div className="c-icon" style={{ background: "#fceef3" }}>
                    <i
                      className="bi bi-briefcase"
                      style={{ color: "#ff689b" }}
                    ></i>
                  </div>
                  <h4 className="c-title">
                    I Need a Ride
                  </h4>
                  <p className="c-description text-black">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>
            </div>
        </div>
        </div>
    );
}
            
export default RequestAssistance;
