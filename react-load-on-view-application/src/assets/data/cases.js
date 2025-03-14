import caseA1 from "../images/case-a-1.webp";
import caseB1 from "../images/case-b-1.webp";
import caseB2 from "../images/case-b-2.webp";
import caseB3 from "../images/case-b-3.webp";
import caseB4 from "../images/case-b-4.webp";
import caseC1 from "../images/case-c-1.webp";
import caseC2 from "../images/case-c-2.webp";
import caseC3 from "../images/case-c-3.webp";
import caseD1 from "../images/case-d-1.webp";
import caseD2 from "../images/case-d-2.webp";
import caseD3 from "../images/case-d-3.webp";
import caseE1 from "../images/case-e-1.webp";
import caseE2 from "../images/case-e-2.webp";
import caseE3 from "../images/case-e-3.webp";
import caseF1 from "../images/case-f-1.webp";
import caseF2 from "../images/case-f-2.webp";

export const cases = [
  {
    images: [caseA1],
    name: "Case A",
    details: "Static data & basic animations",
  },
  {
    images: [caseB1, caseB2, caseB3, caseB4],
    name: "Case B",
    details: "Dynamic data loading with independent card animations",
  },
  {
    images: [caseC1, caseC2, caseC3],
    name: "Case C",
    details: "Dynamic data with full section animations",
  },
  {
    images: [caseD1, caseD2, caseD3],
    name: "Case D",
    details: "Dynamic data with custom card animations",
  },
  {
    images: [caseE1, caseE2, caseE3],
    name: "Case E",
    details: "Direct hook usage (useElementObserver & useLazyLoadAssets)",
  },
  {
    images: [caseF1, caseF2],
    name: "Case F",
    details: "Standalone intersection observer hook",
  },
];
