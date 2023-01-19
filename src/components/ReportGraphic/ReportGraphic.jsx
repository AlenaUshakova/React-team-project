import { TableBox, BoxPadding } from "./ReportGraphic.styled"

import React from "react";
import { BarChart, Bar, LabelList, } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 1000,
  },
  {
    name: "Page B",
    uv: 2500,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 2290,
    pv: 4300,
    amt: 2100
  }
];

const renderCustomBarLabel = ({x, y, width, value }) => {
  return <text x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`${value} UAH`}</text>;
};

export default function ReportGraphic({ onChange }) {
  return (
      <BoxPadding>
          <TableBox>
              <p>{onChange === "expenses"? `expenses graphic`: `income graphic`}</p>
                <BarChart width={600} height={320} data={data} margin={{ top: 20, right: 0, bottom: 20, left: 0 }}>
      <Bar dataKey="uv" fill="#FF751D" label={renderCustomBarLabel}  >
        <LabelList dataKey="name" position="bottom"  />
      </Bar>
    </BarChart>      
        </TableBox>
    </BoxPadding>
  );
}


// export default function ReportGraphic({ onChange }) {
//     return (
//         <><BoxPadding>
//         <TableBox><p>{onChange === "expenses"? `expenses graphic`: `income graphic`}</p></TableBox></BoxPadding></>
//     )
// }