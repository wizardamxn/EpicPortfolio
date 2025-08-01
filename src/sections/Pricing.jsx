import React from "react";
import Chart from "../components/Chart";
import { Particles } from "../components/Particles";
const Pricing = () => {
  return (
    <section className=" relative flex justify-center items-center c-space section-spacingC">
      <Particles className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh   />
      <div className="h-full">
        <Chart />
      </div>
    </section>
  );
};

export default Pricing;
