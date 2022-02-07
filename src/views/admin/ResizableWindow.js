
import CardResizableWindow from "components/Cards/CardResizableWindow.js";

export const title = "Resizable Window";
export const description = "Resizable Window Patch";

export default function ResizableWindow() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <CardResizableWindow />
        </div>
      </div>
    </>
  );
}
