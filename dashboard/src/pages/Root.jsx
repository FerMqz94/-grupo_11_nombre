import React from "react";
import PropTypes from "prop-types";
import SideBar from "../components/Dashboard/Sidebar";
import Footer from "../components/Dashboard/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/*<!-- Main Content -->*/}
          <div id="content">
            

                <Outlet /> {/* INFORMACIÓN DINÁMICA DE ACUERDO A LA VISTA CORRESPONDIENTE */}

            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Root.propTypes = {};

export default Root;
