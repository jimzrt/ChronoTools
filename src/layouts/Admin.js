import React from "react";
// import { Switch, Route, Redirect } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

// import Dashboard from "views/admin/Dashboard.js";
// import Maps from "views/admin/Maps.js";
// import Settings from "views/admin/Settings.js";
// import Tables from "views/admin/Tables.js";
import pageMap from "components/pages";
import { useLocation } from "react-router-dom";

export default function Admin() {
  const location = useLocation();
  return location.pathname in pageMap ? (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <div className=" h-screen flex flex-col">
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full flex-grow">
            <div className="-mt-24">
              <Switch>
                {Object.keys(pageMap).map((key) => (
                  <Route
                    key={key}
                    path={key}
                    exact
                    component={pageMap[key].component}
                  />
                ))}
                <Redirect from="*" to="/ChronoTools" />
              </Switch>
            </div>

            <FooterAdmin />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Redirect to="/ChronoTools" />
  );
}
