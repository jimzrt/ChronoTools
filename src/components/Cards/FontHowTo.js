import React from "react";

// components

export default function FontHowTo() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/team-2-800x800.jpg")}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 font-mono">
              How To
            </h3>
            {/* <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              Los Angeles, California
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              University of Computer Science
            </div> */}
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4 font-mono">
                <p className="mb-4 text-md leading-relaxed text-blueGray-700">
                  The font used in Chrono Trigger is encrypted (
                  <i className="font-light">string_2.bin</i>) and packed (
                  <i className="font-light">resources.bin</i>).
                  <br />
                  Packed files can be extracted or replaced with{" "}
                  <a
                    target="_blank"
                    className="font-semibold"
                    href="http://rivernyxx.com/downloads.html"
                    rel="noreferrer"
                  >
                    CT_Explore by rivernyxx
                  </a>
                  .
                  <br />
                  To generate a new font, you can encrypt any .ttf font file
                  (beware of missing glyphs) using this tool and replace it via
                  CT_Explore. You can also decrypt encrypted files to a .ttf
                  file.
                </p>
                <hr className="my-4 md:min-w-full" />
                <p>
                  No files are uploaded to the server!
                  <br />
                  All processing is done locally in the browser via JavaScript
                  and WebAssembly (which makes it pretty fast ).
                </p>
                {/* <a
                  href="#pablo"
                  className="font-normal text-lightBlue-500"
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
