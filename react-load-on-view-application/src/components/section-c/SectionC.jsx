import { lazy } from "react";
const Card = lazy(() => import("../Card"));
import Section from "../Section";

function SectionC({ data }) {
  return (
    <Section caseName={data?.caseName} subject={data?.subject} position="end">
      {data?.images?.map((image, i) => {
        return <Card src={image.src} key={i} />;
      })}
    </Section>
  );
}

export default SectionC;
