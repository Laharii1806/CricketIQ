function Features() {
  return (
    <section
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "60px 40px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Why CricketIQ?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h3>📊 Analytics</h3>
          <p>Analyze player and team performance.</p>
        </div>

        <div>
          <h3>🎯 Predictions</h3>
          <p>Predict match outcomes and scores.</p>
        </div>

        <div>
          <h3>🤖 AI Assistant</h3>
          <p>Ask cricket-related questions instantly.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;