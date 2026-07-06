function PlayerCard({ name, country, role, image }) {
  return (
    <div
      style={{
        background: "#1E293B",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        width: "250px",
      }}
      
    >
      <h2>{name}</h2>
      <p>{country}</p>
      <p>{role}</p>
      <img
  src={image}
  alt={name}
  style={{
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
  }}
/>

      <button
        style={{
          marginTop: "10px",
          padding: "8px 15px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        View Profile
      </button>
    </div>
  );
}

export default PlayerCard;