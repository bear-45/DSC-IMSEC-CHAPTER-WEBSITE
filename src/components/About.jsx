import React from "react";
import web from "../images/img3.svg";


const About=()=>{



return (
    <>
    <section id="header" className="d-flex align-item-center" >
    <div className="container-fluid nav_bg">
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className="row">
                    <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>Welcome to  <strong className="brand-name">DSC IMSEC CLUB</strong></h1>
                        <h2 className="my-3">We are the team of talented developer making websites</h2>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img  src={web} className="img-fluid1 animated"  width="90%" alt="home img"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
    </>
)

};

export default About;