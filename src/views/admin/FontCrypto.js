import React from "react";

// components

import CardCrypto from "components/Cards/Cryption/CardCrypto.js";
import FontHowTo from "components/Cards/FontHowTo.js";

export const title = "FontCrypto";
export const description =
  "FontCrypto - Encrypt and Decrypt Chrono Trigger Fonts";

export default function FontCrypto() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <CardCrypto />
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <FontHowTo />
        </div>
      </div>
    </>
  );
}
