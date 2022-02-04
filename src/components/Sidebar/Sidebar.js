/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import pageMap from "components/pages";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  console.log(location.pathname);
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center  relative md:w-64 z-10 py-4 px-6">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center  w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
        >
          <i className="fas fa-bars" />
        </button>
        {/* Brand */}
        <Link
          className="md:block text-left md:pb-2  mr-0 whitespace-nowrap  p-4 px-0 justify-center  flex flex-1 md:flex-initial"
          to="/"
        >
          <img
            src={require("assets/img/logo.jpg")}
            alt="..."
            className="  "
            style={{ maxWidth: "150px" }}
          />
        </Link>
        {/* User */}
        {/* <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">
            <NotificationDropdown />
          </li>
          <li className="inline-block relative">
            <UserDropdown />
          </li>
        </ul> */}
        {/* Collapse */}
        <div
          className={
            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
            collapseShow
          }
        >
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">
              <div className="w-full flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </div>

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              <Link
                className={
                  "text-xs uppercase py-3 font-bold block " +
                  (location.pathname === "/"
                    ? "text-lightBlue-500 hover:text-lightBlue-600"
                    : "text-blueGray-700 hover:text-blueGray-500")
                }
                to={"/"}
                onClick={() => setCollapseShow("hidden")}
              >
                <i
                  className={
                    `${pageMap["/"].iconClass} mr-2 text-sm ` +
                    (location.pathname == "/"
                      ? "opacity-75"
                      : "text-blueGray-300")
                  }
                />{" "}
                {pageMap["/"].title}
              </Link>
            </li>
          </ul>
          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
          {/* Heading */}
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            Tools
          </h6>
          {/* Navigation */}

          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            {Object.keys(pageMap).map(
              (key) =>
                pageMap[key].category === "tool" && (
                  <li key={key} className="items-center">
                    <Link
                      className={
                        "text-xs uppercase py-3 font-bold block " +
                        (location.pathname == key
                          ? "text-lightBlue-500 hover:text-lightBlue-600"
                          : "text-blueGray-700 hover:text-blueGray-500")
                      }
                      to={key}
                      onClick={() => setCollapseShow("hidden")}
                    >
                      <i
                        className={
                          `${pageMap[key].iconClass} mr-2 text-sm ` +
                          (location.pathname == key
                            ? "opacity-75"
                            : "text-blueGray-300")
                        }
                      />{" "}
                      {pageMap[key].title}
                    </Link>
                  </li>
                )
            )}
          </ul>

          {/* Divider */}
          <hr className="my-4 md:min-w-full" />
        </div>
      </div>
    </nav>
  );
}
