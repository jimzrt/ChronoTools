import React from "react";

// components

import './HeaderStats.css';

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className=" bg-chrono md:pt-32 pb-20 pt-12" >
        <div className="px-4 md:px-10 mx-auto w-full"  >
            {/* Card stats */}
            <div className="flex flex-wrap "  >
              <div className="w-full overflow-hidden  ">
                <div className="rolling mb-2"/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
