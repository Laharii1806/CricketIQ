function RecentMatches() {
  const matches = [
    {
      team1: "India",
      team2: "Australia",
      result: "India won by 6 wickets",
    },
    {
      team1: "England",
      team2: "Pakistan",
      result: "England won by 22 runs",
    },
    {
      team1: "South Africa",
      team2: "New Zealand",
      result: "New Zealand won by 4 wickets",
    },
  ];

  return (
    <div
      style={{
        background: "#1E293B",
        color: "white",
        padding: "30px",
        marginTop: "40px",
        borderRadius: "15px",
      }}
    >
      <h2 style={{ color: "#38BDF8" }}>
        🏏 Recent Matches
      </h2>

      {matches.map((match, index) => (
        <div
          key={index}
          style={{
            padding: "15px 0",
            borderBottom: "1px solid #334155",
          }}
        >
          <h3>
            {match.team1} vs {match.team2}
          </h3>

          <p>{match.result}</p>
        </div>
      ))}
    </div>
  );
}

export default RecentMatches;