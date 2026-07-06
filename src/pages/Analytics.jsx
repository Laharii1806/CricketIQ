import StatCard from "../components/StatCard";
import Performance from "../components/Performance";
import AIInsights from "../components/AIInsights";
import RecentMatches from "../components/RecentMatches";

function Analytics() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F172A",
        padding: "50px",
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        CricketIQ Analytics Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <StatCard title="Total Players" value="15" icon="🏏" />

        <StatCard title="Teams Covered" value="5" icon="🌍" />

        <StatCard title="Top Batsman" value="Virat Kohli" icon="⭐" />

        <StatCard title="Top Bowler" value="Mitchell Starc" icon="🎯" />
      </div>
      <Performance/>
      <AIInsights/>
      <RecentMatches/>
    </div>
  );
}

export default Analytics;