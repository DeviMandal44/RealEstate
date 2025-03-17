import React from "react";
import Header from "../Component/Header/Header";
import Sidebar from "../Component/Sidebar/Sidebar";
import Property from "../Property/Property";




const LayoutProperty=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Property className="Property" />

            </div>
        </div>
        </div>
        


        </>
    )
}

export default LayoutProperty;