import React from "react";
import TutorialsCard from "../../components/Cards/TutorialsCard/TutorialsCard";

const Tutorial = () => {
  return (
    <section className="flex flex-col gap-y-10  m-5 ">
      <h4 className="leading-[46px] text-[46px] font-Inria font-bold text-[#B27409]  ">
        Tutorials
      </h4>
      <div className="flex flex-row flex-wrap gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return <TutorialsCard key={index} />;
        })}
      </div>
    </section>
  );
};

export default Tutorial;
