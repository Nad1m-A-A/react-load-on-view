import { forwardRef } from "react";
import JustText from "./JustText";
import Seperator from "./Seperator";

function Section(
  { caseName, subject, children, columns, width, position },
  ref
) {
  const gridCols = {
    1: "grid-cols-1",
    3: "grid-col-1 md:grid-cols-2 lg:grid-cols-3",
  };
  const maxWidths = {
    xl: "max-w-2xl",
  };
  const placeItems = {
    end: "place-items-end",
  };
  return (
    <section ref={ref}>
      <div className="grid grid-cols-1 gap-10 min-h-screen place-items-center place-content-center">
        <JustText
          text={caseName}
          style="py-2 px-6 bg-secondary-100 text-xl rounded-sm"
        />
        <JustText text={subject} style="text-xl font-medium uppercase" />
        <div
          className={`${gridCols[columns] || "md:grid-cols-2"} ${
            maxWidths[width] || "max-w-6xl"
          } ${placeItems[position] || "place-items-start"} grid gap-4 mx-auto`}
        >
          {children}
        </div>
      </div>
      <Seperator />
    </section>
  );
}

export default forwardRef(Section);
