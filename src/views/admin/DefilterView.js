
import CardDefilter from "components/Cards/CardDefilter.js";

const title = "Defilter";
const description = "Defilter Patch";

export default function DefilterView() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardDefilter />
        </div>
      </div>
    </>
  );
}

DefilterView.title = title;
DefilterView.description = description;
