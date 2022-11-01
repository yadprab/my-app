import React from 'react'
import { ChartTooltip } from '../PieChart';
const t = {
  Customers: "Customers",
  Receivables: "Receivables",
  Invoices: "Invoices",
};
interface CollectionStatusToolTipContent extends ChartTooltip {
  data: {
    type: string;
    value: number;
}[];
}
interface ToolTipProps {
  title: string;
  content: CollectionStatusToolTipContent[];
}
function ToolTip(props: ToolTipProps) {
  return <div>ToolTip</div>;
}

export default ToolTip
