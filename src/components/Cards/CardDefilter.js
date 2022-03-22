import { useState } from "react";


const CardDefilter = () => {

  // https://github.com/cocos2d/cocos2d-x/blob/90f6542cf7fb081335f04e474b880d7ce8c445a1/cocos/renderer/CCTexture2D.cpp#L137
  const patchLocation = 0x260873;

  // https://github.com/cocos2d/cocos2d-x/blob/90f6542cf7fb081335f04e474b880d7ce8c445a1/cocos/renderer/CCTexture2D.cpp#L607
  const patchLocation2 = 0x262a55;

  const [libCocosFile, setLibCocosFile] = useState();
  const [statusMessage, setStatusMessage] = useState("");

  const FileStreamReader = () => {
    const reader = new FileReader();
    return (blob, offset = 0, length = blob.size) =>
      new Promise((resolve) => {
        reader.onload = () => resolve(new Uint8Array(reader.result));
        console.log(offset, offset + length);
        if (offset === 0 && length === blob.size) {
          reader.readAsArrayBuffer(blob);
        } else {
          reader.readAsArrayBuffer(blob.slice(offset, offset + length));
        }
      });
  };

  const saveByteArray = (fileName, byte) => {
    const blob = new Blob([byte], {
      type: "application/octet-stream",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };


  const patch = async () => {
    if (!libCocosFile) {
      return;
    }
    const fileReader = FileStreamReader();

    const libCocos = await fileReader(libCocosFile);
    libCocos[patchLocation] = 0;
    libCocos[patchLocation2] = 1;
    setStatusMessage("Patched!");


    // patch file
    saveByteArray("libcocos2d.dll", libCocos);
  };



  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 px-6 py-6">
        <div className="flex flex-wrap">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                libcocos2d library
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      libcocos2d.dll
                    </label>
                    <input
                      onChange={(e) => setLibCocosFile(e.target.files[0])}
                      type="file"
                      accept=".dll"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full  px-4">
                  <div className="mt-6">
                    <button
                      onClick={() => patch()}
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Patch
                    </button>
                    {statusMessage && (<div>{statusMessage}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDefilter;
