import React from "react";

// components

import CardSave from "components/Cards/Cryption/CardSave.js";

export const title = "Savegame Editor";
export const description = "Savegame Editor";

export default function FontCrypto() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardSave />
        </div>
      </div>
    </>
  );
}
