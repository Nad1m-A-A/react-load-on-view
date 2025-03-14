import { useEffect, useState } from "react";
import data from "../../assets/data/section-f";
import { useElementObserver } from "../../../../src/index";
import Section from "../Section";
import Card from "../Card";
import JustText from "../JustText";

function SectionF() {
  const [visibilityClass, setVisibilityClass] = useState("unclear");
  const { ref, inView } = useElementObserver({
    threshold: 0.6,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) setVisibilityClass("clear");
    else setVisibilityClass("unclear");
  }, [inView]);

  return (
    <Section ref={ref} caseName={data?.caseName} subject={data?.subject}>
      {data?.images?.map((image, i) => {
        return <Card src={image.src} style={visibilityClass} key={i} />;
      })}
      <JustText
        style={visibilityClass + " text-justify font-normal"}
        text={data?.text}
      />
    </Section>
  );
}

export default SectionF;
