
import CardSave from "components/Cards/Cryption/CardSave.js";

const title = "Savegame Editor";
const description = "Savegame Editor";

export default function SavegameEditor() {
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
SavegameEditor.title = title;
SavegameEditor.description = description;
