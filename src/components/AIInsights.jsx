function AIInsights() {
  return (
    <div
      style={{
        background: "#1E293B",
        color: "white",
        marginTop: "40px",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      <h2 style={{ color: "#38BDF8" }}>
        🤖 AI Match Insights
      </h2>

      <ul style={{ lineHeight: "2", fontSize: "18px" }}>
        <li>India has won 7 of the last 10 T20 matches against Australia.</li>
        <li>Virat Kohli averages 62 against Australia in ICC tournaments.</li>
        <li>Jasprit Bumrah has the best death-over economy among current Indian bowlers.</li>
        <li>Our AI predicts India has a 64% chance of winning if batting first.</li>
      </ul>
    </div>
  );
}

export default AIInsights;