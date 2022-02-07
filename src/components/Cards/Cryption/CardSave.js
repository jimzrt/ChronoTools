import { useState, useEffect } from "react";
import createCryptoModule from "modules/crypto";

const chars = ["Crono", "Marle", "Lucca", "Robo", "Frog", "Ayla", "Magus"];
const items = [
  "Dummy",
  "Wooden Sword",
  "Bronze Blade",
  "Steel Saber",
  "Silver Sword",
  "Crimson Blade",
  "Mammoth Tusk",
  "Dark Saber",
  "Primeval Blade",
  "Zanmato",
  "Vajra Sword",
  "Empyrean Blade",
  "Yaksha Blade",
  "Onimaru",
  "Suzaku",
  "Thunder Blade",
  "Slasher",
  "Bronze Bowgun",
  "Iron Bowgun",
  "Silver Bow",
  "Bandit's Bow",
  "Shaman's Bow",
  "Dreamstone Bow",
  "Comet Bow",
  "Sonic Bow",
  "Valkyrie Bow",
  "Siren's Kiss",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Airgun",
  "Pea Shooter",
  "Pocket Blaster",
  "Picomagnum",
  "Plasma Gun",
  "Ruby Gun",
  "Dreamstone Gun",
  "Megablaster",
  "Shockwave",
  "Wondershot",
  "Gravitator",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Tin Arm",
  "Hammer Arm",
  "Mirage Hand",
  "Stone Arm",
  "Death Claw",
  "Magma Hand",
  "Megaton Arm",
  "Heavy Hand",
  "Kaiser Arm",
  "Gigaton Arm",
  "Teraton Arm",
  "Crisis Arm",
  "Dummy",
  "Bronze Sword",
  "Iron Sword",
  "Masamune",
  "Radiant Blade",
  "Smiter's Blade",
  "Rune Blade",
  "Brave Sword",
  "Masamune",
  "Demonslayer",
  "Fist",
  "Fist",
  "Fist",
  "Iron Fist",
  "Bronze Fist",
  "Dummy",
  "Dummy",
  "Moonfall Scythe",
  "Headman's Scythe",
  "Hadean Sickle",
  "Doom Scythe",
  "Mop",
  "Broken Blade",
  "Broken Hilt",
  "Masamune",
  "Swallow",
  "Slasher II",
  "Rainbow",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Icewyrm",
  "Stardust Bow",
  "Turboshot",
  "Dinoblade",
  "Dragon Arm",
  "Judgment Scythe",
  "Dreamseeker",
  "Venus Bow",
  "Spellslinger",
  "Apocalypse Arm",
  "Dreamreaper",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Hide Tunic",
  "Padded Vest",
  "Bronze Armor",
  "Maiden's Suit",
  "Iron Suit",
  "Titanium Vest",
  "Golden Suit",
  "Ruby Vest",
  "Dark Mail",
  "Mist Robe",
  "Mesozoic Mail",
  "Luminous Robe",
  "Radiant Plate",
  "Platinum Vest",
  "Aeonian Suit",
  "Zodiac Cape",
  "Nova Armor",
  "Prismatic Dress",
  "Moonbeam Armor",
  "Ruby Armor",
  "Raven Armor",
  "Gloom Cape",
  "White Plate",
  "Black Plate",
  "Blue Plate",
  "Red Plate",
  "White Vest",
  "Black Vest",
  "Blue Vest",
  "Red Vest",
  "Taban's Vest",
  "Taban's Suit",
  "Dragon Armor",
  "Reptite Dress",
  "Saurian Leathers",
  "Regal Plate",
  "Regal Gown",
  "Elemental Aegis",
  "Shadowplume Robe",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Hide Cap",
  "Bronze Helm",
  "Iron Helm",
  "Porrean Beret",
  "Golden Helm",
  "Stone Helm",
  "Triceratopper",
  "Radiant Helm",
  "Platinum Helm",
  "Aeonian Helm",
  "Prismatic Helm",
  "Doom Helm",
  "Dark Helm",
  "Gloom Helm",
  "Guardian Helm",
  "Taban's Helm",
  "Clarity Cap",
  "Memory Cap",
  "Time Hat",
  "Vigilant's Hat",
  "Ozzie Pants",
  "Haste Helm",
  "Rainbow Helm",
  "Mermaid Helm",
  "Dragonhead",
  "Reptite Tiara",
  "Master's Crown",
  "Angel's Tiara",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Headband",
  "Ribbon",
  "Power Glove",
  "Guardian Bangle",
  "Magic Scarf",
  "Schala's Amulet",
  "Speed Ring",
  "Acuity Ring",
  "Power Ring",
  "Magic Ring",
  "Barrier Ring",
  "Silver Earring",
  "Golden Earring",
  "Silver Stud",
  "Golden Stud",
  "Sight Scope",
  "Alluring Top",
  "Rage Band",
  "Wrath Band",
  "Third Eye",
  "Workman's Wallet",
  "Green Dream",
  "Berserker Ring",
  "Power Scarf",
  "Speed Belt",
  "Black Gemstone",
  "Blue Gemstone",
  "Silver Gemstone",
  "White Gemstone",
  "Golden Gemstone",
  "Hero's Badge",
  "Muscle Ring",
  "Flea Bustier",
  "Magic Crest",
  "Power Crest",
  "Accessory",
  "Seraph Song",
  "Sunglasses",
  "Prism Spectacles",
  "Valor Crest",
  "Champion's Badge",
  "Dragon's Tear",
  "Nu Arcana",
  "Uranian Mirror",
  "Pontic Mirror",
  "Promethean Mirror",
  "Hadean Mirror",
  "Aresian Mirror",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Potion",
  "Mid-Potion",
  "Hi-Potion",
  "Ether",
  "Mid-Ether",
  "Hi-Ether",
  "Elixir",
  "Turbo Ether",
  "Megalixir",
  "Panacea",
  "Athenian Water",
  "Shelter",
  "Ambrosia",
  "Lapis",
  "Barrier Sphere",
  "Shield Sphere",
  "Strength Capsule",
  "Magic Capsule",
  "Speed Capsule",
  "Slops",
  "Flameclaw",
  "Seafang",
  "Duskeye",
  "Luxwing",
  "Hawk Talon",
  "Shield Cloak",
  "Feral Wrath",
  "Smoked Meat",
  "Dried Mushroom",
  "Sweet Banana",
  "Millennia Fruit",
  "Songbird Egg",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Petal",
  "Fang",
  "Horn",
  "Feather",
  "Seed",
  "Jetbike Key",
  "Pendant",
  "Gate Key",
  "Rainbow Shard",
  "Chrono Trigger",
  "Carpenter's Tools",
  "Spiced Jerky",
  "Dreamstone",
  "Race Recorder",
  "Moon Stone",
  "Sun Stone",
  "Ruby Knife",
  "Yakra's Key",
  "Doppel Doll",
  "Toma's Spirits",
  "2 Petals",
  "2 Fangs",
  "2 Horns",
  "2 Feathers",
  "Golden Sand",
  "Golden Hammer",
  "Prismastone",
  "Saintstone",
  "Reptmark",
  "Waystone",
  "Godwood",
  "Steel Ingot",
  "Sturdy Vines",
  "Hearty Lunch",
  "Rusted Blade",
  "Lumicite Shard",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
  "Dummy",
];
const items_offset_start = 0x698;
const items_offset_end = items_offset_start + items.length * 3;

const base_offset = 0x434;
const char_offset = 0x58;

const x_pos_offset = 0x403;
const y_pos_offset = 0x404;


const CardSave = () => {
  const [module, setModule] = useState();

  const [chronoFile, setChronoFile] = useState();
  const [encryptedFile, setEncryptedFile] = useState();
  const [savegameData, setSavegameData] = useState(null);

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
    readSaveData(decrypted);
    module._free(keyPtr);
    module._free(encryptedPtr);
  };

  const get_offset_by_skip = (skip) => {
    if (skip === 0x0) {
      return 0;
    }
    if (skip === 0x10) {
      return 111;
    }
    if (skip === 0x20) {
      return 161;
    }
    if (skip === 0x30) {
      return 200;
    }
    if (skip === 0x40) {
      return 259;
    }
    if (skip === 0x50) {
      return 302;
    }
    return 0;
  };

  const readSaveData = (uint8Array) => {
    const dataView = new DataView(
      uint8Array.buffer,
      uint8Array.byteOffset,
      uint8Array.byteLength
    );

    const saveData = [];

    for (let [idx, name] of chars.entries()) {
      let offset = base_offset;
      let char = {};
      char["Name"] = name;
      char["Max HP"] = dataView.getUint16(idx * char_offset + offset, true);
      offset += 2;
      char["HP"] = dataView.getUint16(idx * char_offset + offset, true);
      offset += 2;
      char["Max MP"] = dataView.getUint16(idx * char_offset + offset, true);
      offset += 2;
      char["Mp"] = dataView.getUint16(idx * char_offset + offset, true);
      offset += 2;
      // ??
      offset += 2;
      char["Strength"] = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Stamina"] = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Speed"] = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Magic"] = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Accuracy"] = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Evasion"] = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Magic Defense"] = dataView.getUint8(
        idx * char_offset + offset,
        true
      );
      offset += 1;
      char["Level"] = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Exp"] = dataView.getUint32(idx * char_offset + offset, true);
      offset += 22;
      let weapon_idx = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      let skip = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Weapon"] = items[weapon_idx + get_offset_by_skip(skip)];
      let armor_idx = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      skip = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Armor"] = items[armor_idx + get_offset_by_skip(skip)];
      let helm_idx = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      skip = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Helm"] = items[helm_idx + get_offset_by_skip(skip)];
      let acc_idx = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      skip = dataView.getUint8(idx * char_offset + offset, true);
      offset += 1;
      char["Accessory"] = items[acc_idx + get_offset_by_skip(skip)];

      saveData.push(char);
    }

    setSavegameData(saveData);
  };

  useEffect(() => {
    const loadModule = async () => setModule(await createCryptoModule());
    loadModule();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 px-6 py-6">
        <div className="flex flex-wrap">
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
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Savegame{" "}
                <i className="font-mono text-xs">
                  (%userprofile%\Documents\My Games\Chrono Trigger\save_01.bin)
                </i>
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full  px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      save_XX.bin
                    </label>
                    <input
                      onChange={(e) => setEncryptedFile(e.target.files[0])}
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
        {savegameData && (
          <div className="flex flex-wrap">
            <div className="px-4 py-5 flex-auto">
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Savegame Data
              </h6>
              <table className="table-auto w-full font-mono">
                <thead>
                  <tr>
                    <th></th>
                    {chars.map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(savegameData[0])
                    .slice(1)
                    .map((prop) => (
                      <>
                        <tr className="border-b">
                          <td className="font-semibold text-right">{prop}</td>
                          {savegameData.map((char) => (
                            <td className="text-center" key={char}>
                              {char[prop]}
                            </td>
                          ))}
                        </tr>
                      </>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardSave;
