import { useEffect, useState } from "react";
import { useElementObserver } from "../../../../src/index";
import { useLazyLoadAssets } from "../../../../src/index";
import Section from "../Section";
import Card from "../Card";
import JustText from "../JustText";

function SectionE() {
  const [visibleClass, setVisibleClass] = useState("invisible_wrapper");
  const { ref, inView } = useElementObserver();
  const { data } = useLazyLoadAssets(
    ["/src/assets/images/ant.webp", `/src/assets/data/section-e.js`],
    inView
  );

  useEffect(() => {
    if (inView) setVisibleClass("visible_wrapper");
  }, [inView]);

  return (
    <Section
      ref={ref}
      caseName={data?.caseName}
      subject={data?.subject}
      position="end"
    >
      <JustText text={data?.text} style={`text-justify ${visibleClass}`} />
      {data?.images?.map((image, i) => {
        return <Card src={image.src} style={visibleClass} key={i} />;
      })}
    </Section>
  );
}

export default SectionE;
