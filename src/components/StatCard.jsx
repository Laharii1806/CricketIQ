function StatCard({ title, value, icon }) {
  return (
    <div
      style={{
        background: "#1E293B",
        borderRadius: "15px",
        padding: "25px",
        color: "white",
        width: "250px",
        textAlign: "center",
        transition: "0.3s",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ fontSize: "40px" }}>{icon}</div>

      <h3>{title}</h3>

      <h1
        style={{
          color: "#38BDF8",
          marginTop: "10px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default StatCard;