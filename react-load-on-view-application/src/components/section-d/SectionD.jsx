import { lazy } from "react";
import Section from "../Section";
const AnimatedCard = lazy(() => import("../AnimatedCard"));

function SectionD({ data }) {
  return (
    <Section caseName={data?.caseName} subject={data?.subject} position="start">
      {data?.images?.map((image, i) => {
        return (
          <AnimatedCard
            src={image.src}
            key={i}
            // The card is already animated with the default class,
            // but "special_animation" property has priority over "afterWrapperIsVisibleClass".
            special_animation={`stagger-${i}`}
          />
        );
      })}
    </Section>
  );
}

export default SectionD;
