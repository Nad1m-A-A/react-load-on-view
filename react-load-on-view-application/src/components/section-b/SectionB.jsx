import { lazy } from "react";
const CustomError = lazy(() => import("../CustomError"));
const CustomLoader = lazy(() => import("../CustomLoader"));
const Carousel = lazy(() => import("../Carousel"));
import Section from "../Section";
import JustText from "../JustText";

function SectionB({ data, error, loading }) {
  if (error) return <CustomError errorMessage={error} />;
  if (loading) return <CustomLoader />;
  return (
    <Section
      caseName={data?.caseName}
      subject={data?.subject}
      columns="3"
      position="end"
    >
      {data?.cases?.map((caseItem, i) => {
        return (
          <div key={i}>
            <JustText text={caseItem.name} style="font-bold uppercase" />
            <JustText text={caseItem.details} />
            <Carousel images={caseItem.images} />
          </div>
        );
      })}
    </Section>
  );
}

export default SectionB;
