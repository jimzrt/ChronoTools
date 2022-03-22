import { useState, useEffect } from "react";
import createCryptoModule from "modules/crypto";

const CardCrypto = () => {
  const [openTab, setOpenTab] = useState(1);
  const [module, setModule] = useState();

  const [chronoFile, setChronoFile] = useState();
  const [encryptedFile, setEncryptedFile] = useState();
  const [fontFile, setFontFile] = useState();

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

  const arrayToPtr = (array) => {
    let bufferSize = array.length;
    if ((bufferSize & 7) !== 0) {
      bufferSize += 8 - (bufferSize & 7);
    }
    const ptr = module._malloc(bufferSize);
    module.HEAPU8.set(array, ptr);
    return [ptr, bufferSize];
  };

  const ptrToArray = (ptr, length) =>
    new Uint8Array(module.HEAPU8.buffer, ptr, length);

  const saveByteArray = (fileName, byte) => {
    const blob = new Blob([byte], {
      type: "application/octet-stream",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  const decrypt = async () => {
    if (!chronoFile || !encryptedFile) {
      return;
    }
    const fileReader = FileStreamReader();

    const key = await fileReader(chronoFile);
    const encrypted = await fileReader(encryptedFile);

    const keyPtr = arrayToPtr(key)[0];
    const encryptedPtr = arrayToPtr(encrypted)[0];

    // decrypt function writes into encryptedPtr so no need to free the return value of _decrypt
    const decrypted = ptrToArray(
      module._decrypt(keyPtr, key.length, encryptedPtr, encrypted.length),
      encrypted.length - 8
    );
    saveByteArray("decrypted.ttf", decrypted);
    module._free(keyPtr);
    module._free(encryptedPtr);
  };

  const encrypt = async () => {
    if (!chronoFile || !fontFile) {
      return;
    }
    const fileReader = FileStreamReader();

    const key = await fileReader(chronoFile);
    const decrypted = await fileReader(fontFile);

    const keyPtr = arrayToPtr(key)[0];
    const [decryptedPtr, bufferSize] = arrayToPtr(decrypted);

    // encrypt function writes into decryptedPtr so no need to free the return value of _decrypt
    const encrypted = ptrToArray(
      module._encrypt(keyPtr, key.length, decryptedPtr, bufferSize),
      bufferSize
    );
    const header = new Int8Array([0, 0, 0, 0, 0, 0, 0, 0]);

    const encryptedWithHeader = new Int8Array(header.length + encrypted.length);
    encryptedWithHeader.set(header);
    encryptedWithHeader.set(encrypted, header.length);

    saveByteArray("string_2.bin", encryptedWithHeader);
    module._free(keyPtr);
    module._free(decryptedPtr);
  };

  useEffect(() => {
    const loadModule = async () => setModule(await createCryptoModule());
    loadModule();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 px-6 py-6">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto  text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-lightBlue-600"
                      : "text-lightBlue-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Encrypt
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-lightBlue-600"
                      : "text-lightBlue-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Decrypt
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Chrono Trigger Binary
                  </h6>
                  <div className="flex flex-wrap">
                    <div className="w-full  px-4">
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          ChronoTrigger.exe
                        </label>
                        <input
                          onChange={(e) => setChronoFile(e.target.files[0])}
                          type="file"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                      Font to Encrypt
                    </h6>
                    <div className="flex flex-wrap">
                      <div className="w-full  px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            font.ttf
                          </label>
                          <input
                            onChange={(e) => setFontFile(e.target.files[0])}
                            type="file"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                        <div className="mt-6">
                          <button
                            onClick={() => encrypt()}
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Encrypt
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                      Font to Decrypt
                    </h6>
                    <div className="flex flex-wrap">
                      <div className="w-full  px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            string_2.bin
                          </label>
                          <input
                            onChange={(e) =>
                              setEncryptedFile(e.target.files[0])
                            }
                            type="file"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                        <div className="mt-6">
                          <button
                            onClick={() => decrypt()}
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Decrypt
                          </button>
                        </div>
                      </div>
                    </div>
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

export default CardCrypto;
