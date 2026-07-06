function StatsSection() {
  return (
    <section
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "80px 40px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "15px",
        }}
      >
        Platform Overview
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#9CA3AF",
          marginBottom: "50px",
        }}
      >
        Cricket analytics powered by data, statistics, and AI.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundColor: "#1E293B",
            padding: "30px",
            borderRadius: "15px",
            width: "220px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#22C55E" }}>1000+</h1>
          <h3>Players Analyzed</h3>
        </div>

        <div
          style={{
            backgroundColor: "#1E293B",
            padding: "30px",
            borderRadius: "15px",
            width: "220px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#22C55E" }}>500+</h1>
          <h3>Matches Tracked</h3>
        </div>

        <div
          style={{
            backgroundColor: "#1E293B",
            padding: "30px",
            borderRadius: "15px",
            width: "220px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#22C55E" }}>10K+</h1>
          <h3>Predictions Generated</h3>
        </div>

        <div
          style={{
            backgroundColor: "#1E293B",
            padding: "30px",
            borderRadius: "15px",
            width: "220px",
            textAlign: "center",
          }}
        >
          <h1 style={{ color: "#22C55E" }}>24/7</h1>
          <h3>AI Cricket Assistant</h3>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;