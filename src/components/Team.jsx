import React from "react";
import Team1 from "./MemberCard"; 


const Team=()=>{
return (
    <>
    <div className="container-fluid">
        <div className="row my-5" >
            <Team1 className="col-12 d-flex justify-content-center align-items-center"/>
        </div>
        <div className="row my-5">
            <Team1 className="col-3"/>
            <Team1 className="col-3"/>
            <Team1 className="col-3"/>
            <Team1 className="col-3"/>
        </div>
        <div className="row my-5" >
            <Team1 className="col-3"/>
            <Team1 className="col-3"/>
            <Team1 className="col-3"/>
            <Team1 className="col-3"/>
        </div>
        <div className="row my-5" >
            <Team1 className="col-4"/>
            <Team1 className="col-4"/>
            <Team1 className="col-4"/>
        </div>
        <div className="row my-5">
            <Team1 className="col-3"/>
            <Team1 className="col-3"/>
        </div>
    </div>
    </>
)

};

export default Team;