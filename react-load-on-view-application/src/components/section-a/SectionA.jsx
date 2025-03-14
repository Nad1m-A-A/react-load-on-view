import content from "../../assets/data/section-a";
import Section from "../Section";
import Card from "../Card";
import JustText from "../JustText";

function SectionA() {
  return (
    <Section
      caseName={content.caseName}
      columns="1"
      width="xl"
      details={content.details}
    >
      <JustText text={content.subject} style="text-xl uppercase font-normal" />
      <Card src={content.image} />
      <JustText text={content.description} style="text-xl" />
    </Section>
  );
}

export default SectionA;
