import { Col, Row } from "antd";
import "./App.css";
import PieChartComp from "./Chart/PieChart";

function App() {
  return (
    <Row gutter={[16, 16]} className="pie-chart">
      <Col span={6}>
        <PieChartComp />
      </Col>
      <Col span={6}>
        <PieChartComp />
      </Col>
      <Col span={6}>
        <PieChartComp />
      </Col>
    </Row>
  );
}

export default App;
