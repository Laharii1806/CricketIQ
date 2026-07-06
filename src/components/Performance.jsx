import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { player: "Virat", runs: 765 },
  { player: "Rohit", runs: 620 },
  { player: "Kane williamson", runs: 540 },
  { player: "Buttler", runs: 510 },
  { player: "Tim David", runs: 490 },
];

function PerformanceChart() {
  return (
    <div
      style={{
        background: "#1E293B",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "40px",
      }}
    >
      <h2 style={{ color: "white", textAlign: "center" }}>
        Top Run Scorers
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="player" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="runs" fill="#38BDF8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformanceChart;