import { useState } from "react";
import playersData from "../data/Players";
import PlayerCard from "../components/PlayerCard";

function Players() {
  const [search, setSearch] = useState("");

  const filteredPlayers = playersData.filter((player) =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0F172A",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Top Cricketers
      </h1>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Search Player..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "350px",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <p
  style={{
    color: "white",
    textAlign: "center",
    gap:"10px",
    marginBottom: "20px",
  }}
>
  {filteredPlayers.length} Players Found
</p>
        {filteredPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            name={player.name}
            country={player.country}
            role={player.role}
            image={player.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Players;