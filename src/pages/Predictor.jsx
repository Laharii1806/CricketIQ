import { useState } from "react";

function Predictor() {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const[prediction, setPrediction]=useState(null);
  function predictWinner() {
  if (!team1 || !team2) {
    alert("Please select both teams.");
    return;
  }

  if (team1 === team2) {
    alert("Please choose two different teams.");
    return;
  }

  setPrediction({
    winner: "India",
    probability: 64,
    confidence: 92,
    reason: [
      "Better recent form",
      "Stronger batting lineup",
      "Excellent pace attack",
      "Better head-to-head record",
    ],
  });
}

  const teams = [
    "India",
    "Australia",
    "England",
    "Pakistan",
    "South Africa",
    "New Zealand",
    "Sri Lanka",
    "Bangladesh",
    "Afghanistan",
    "West Indies",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F172A",
        color: "white",
        padding: "50px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "45px",
          marginBottom: "10px",
        }}
      >
        🏆 AI Match Predictor
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#94A3B8",
          marginBottom: "50px",
        }}
      >
        Predict match outcomes using CricketIQ AI
      </p>

      <div
        style={{
          background: "#1E293B",
          maxWidth: "700px",
          margin: "auto",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
        }}
      >
        <h2>Select Teams</h2>

        <select
          value={team1}
          onChange={(e) => setTeam1(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "20px",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          <option>Select Team 1</option>

          {teams.map((team) => (
            <option key={team}>{team}</option>
          ))}
        </select>

        <h1
          style={{
            textAlign: "center",
            margin: "25px 0",
            color: "#38BDF8",
          }}
        >
          VS
        </h1>

        <select
          value={team2}
          onChange={(e) => setTeam2(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          <option>Select Team 2</option>

          {teams.map((team) => (
            <option key={team}>{team}</option>
          ))}
        </select>

        <button
        onClick={predictWinner}
          style={{
            marginTop: "35px",
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "10px",
            background: "#38BDF8",
            color: "#0F172A",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ⚡ Predict Winner
        </button>
        {prediction && (
  <div
    style={{
      marginTop: "40px",
      background: "#0F172A",
      padding: "25px",
      borderRadius: "15px",
      color: "white",
    }}
  >
    <h2 style={{ color: "#38BDF8" }}>
      🤖 AI Prediction
    </h2>

    <h1>{prediction.winner}</h1>

    <h3>
      Win Probability: {prediction.probability}%
    </h3>

    <h3>
      Confidence: {prediction.confidence}%
    </h3>

    <h3>Reasons</h3>

    <ul>
      {prediction.reason.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)}
      </div>
    </div>
  );
}

export default Predictor;