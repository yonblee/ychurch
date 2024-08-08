import React from "react";
import css from "@modules/card.module.css";
import PieChart from "../charts/pie.chart";

const data = [
  { value: 1048, name: "Female" },
  { value: 735, name: "Male" },
  { value: 580, name: "Youth" },
  { value: 484, name: "Children" },
];

const colors = ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99"];

function MembershipGraph() {
  return (
    <article className={`${css.gc24gr13} `}>
      <section className={`${css.center}`}>
        <PieChart data={data} colors={colors} />
      </section>
    </article>
  );
}

export default MembershipGraph;
