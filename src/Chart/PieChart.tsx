import { G2, Pie } from "@ant-design/charts";
import ToolTip from "./ToolTip";
export interface ChartTooltip {
  title: string;
  mappingData: MappingData;
  name: string;
  value: string;
  color: string;
  marker: boolean;
  x: number;
  y: number;
  data: any;
}

export interface MappingData {
  data: Datum[];
  points: Point[];
  x: number;
  y: number;
  color: string;
}

export interface Point {
  readonly x: number;
  readonly y: number;
}

export type Datum = Record<string, any>;
export type PlotEvent = G2.Event;

function PieChartComp() {
  const data = [
    { type: "Email Received", value: 500 },
    { type: "Email Sent", value: 200 },
    { type: "Email Sent And Not Received", value: 100 },
    { type: "Email Sent And Not Received And Delivered", value: 150 },
  ];

  return (
    <div>
      <Pie
        className="pie-chart"
        data={data}
        angleField="value"
        colorField="type"
        renderer="svg"
        tooltip={{
          customContent(title, data) {
            return <ToolTip title={title} content={data} />;
          },
        }}
        legend={{
          itemWidth: 50,
        }}
      />
    </div>
  );
}

export default PieChartComp;
