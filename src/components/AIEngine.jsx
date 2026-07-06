import { useState } from "react";

function AIEngine() {
  const [prediction, setPrediction] = useState(null);

  const generatePrediction = () => {
    setPrediction({
      team1: "India",
      team2: "Australia",
      team1Chance: 68,
      team2Chance: 32,
      insight:
        "Pitch conditions favor spin bowlers. Teams batting first have historically performed better at this venue.",
    });
  };

  return (
    <section
      style={{
        backgroundColor: "#0F172A",
        color: "white",
        padding: "80px 40px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "10px",
        }}
      >
        🧠 CricketIQ AI Engine
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#9CA3AF",
          marginBottom: "40px",
        }}
      >
        AI-powered predictions and match intelligence
      </p>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#111827",
          padding: "30px",
          borderRadius: "16px",
        }}
      >
        <label>Match</label>

        <select
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <option>India vs Australia</option>
          <option>England vs South Africa</option>
          <option>India vs Pakistan</option>
        </select>

        <button
          onClick={generatePrediction}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#22C55E",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Generate AI Insight
        </button>

        {prediction && (
          <div style={{ marginTop: "30px" }}>
            <h3>Win Probability</h3>

            <p>{prediction.team1}</p>

            <div
              style={{
                backgroundColor: "#374151",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: `${prediction.team1Chance}%`,
                  backgroundColor: "#22C55E",
                  height: "14px",
                }}
              />
            </div>

            <p>{prediction.team1Chance}%</p>

            <p>{prediction.team2}</p>

            <div
              style={{
                backgroundColor: "#374151",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: `${prediction.team2Chance}%`,
                  backgroundColor: "#3B82F6",
                  height: "14px",
                }}
              />
            </div>

            <p>{prediction.team2Chance}%</p>

            <h3 style={{ marginTop: "25px" }}>
              AI Insight
            </h3>

            <p>{prediction.insight}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default AIEngine;