import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export const title = "FontCrypto";
export const description = "FontCrypto - Encrypt and Decrypt Chrono Trigger Fonts";

export default function FontCrypto() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
