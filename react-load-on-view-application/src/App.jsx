import { withViewObserver } from "../../src/index";
import SectionA from "./components/section-a/SectionA";
import SectionB from "./components/section-b/SectionB";
import SectionC from "./components/section-c/SectionC";
import SectionD from "./components/section-d/SectionD";
import SectionE from "./components/section-e/SectionE";
import SectionF from "./components/section-f/SectionF";

// Wrap components with visibility observer
const dataPath = "/src/assets/data/";
const imagesPath = "/src/assets/images/";
const components = [
  {
    Component: withViewObserver(SectionA, {
      animate: true,
      threshold: 0.1,
    }),
  },
  {
    Component: withViewObserver(SectionB, {
      lazyLoad: true,
      threshold: 0.05,
      paths: [`${dataPath}cases.js`, `${dataPath}section-b.js`],
    }),
  },
  {
    Component: withViewObserver(SectionC, {
      animate: true,
      threshold: 0.3,
      lazyLoad: true,
      paths: [
        `${dataPath}section-c.js`,
        `${imagesPath}blue.webp`,
        `${imagesPath}cat.webp`,
      ],
    }),
  },
  {
    Component: withViewObserver(SectionD, {
      lazyLoad: true,
      paths: [
        `${imagesPath}bee.webp`,
        `${imagesPath}yellow.webp`,
        `${dataPath}section-d.js`,
      ],
    }),
  },
  {
    Component: SectionE,
  },
  {
    Component: SectionF,
  },
];

const App = () => {
  return (
    <>
      <div className="container mx-auto">
        {components.map(({ Component }, i) => (
          <Component key={i} />
        ))}
      </div>
      <footer>
        <b className="block text-center pb-10">
          <a target="_blank" href="https://x.com/nano_the_coder">follow me on twitter</a>
        </b>
      </footer>
    </>
  );
};

export default App;
