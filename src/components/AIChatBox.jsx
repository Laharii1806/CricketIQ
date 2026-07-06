import { useState } from "react";

function AIChatBox() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    if (!question) return;

    // Fake AI response (we’ll replace with real AI later)
    setAnswer(
      "Based on current stats and pitch conditions, India has a higher chance of winning. Key factor: strong top-order batting and spin-friendly pitch."
    );
  };

  return (
    <section
      style={{
        backgroundColor: "#0F172A",
        color: "white",
        padding: "80px 40px",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "34px" }}>
        🤖 Ask CricketIQ
      </h2>

      <p style={{ textAlign: "center", color: "#9CA3AF" }}>
        Get AI-style answers about matches, players, and predictions
      </p>

      {/* INPUT BOX */}
      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          display: "flex",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="e.g. Who will win India vs Australia?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #374151",
            backgroundColor: "#111827",
            color: "white",
          }}
        />

        <button
          onClick={handleAsk}
          style={{
            padding: "12px 20px",
            backgroundColor: "#22C55E",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Ask
        </button>
      </div>

      {/* ANSWER BOX */}
      {answer && (
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            backgroundColor: "#111827",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #1F2937",
          }}
        >
          <h3 style={{ color: "#60A5FA" }}>AI Insight</h3>
          <p style={{ color: "#D1D5DB" }}>{answer}</p>
        </div>
      )}
    </section>
  );
}

export default AIChatBox;