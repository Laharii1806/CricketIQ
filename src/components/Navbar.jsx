import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaChartBar, FaRobot } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0F172A",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      {/* LOGO + WEBSITE NAME */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src={logo}
          alt="CricketIQ Logo"
          style={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        <h2
          style={{
            margin: 0,
            color: "#22C55E",
            fontSize: "28px",
          }}
        >
          CricketIQ
        </h2>
      </div>

      {/* NAVIGATION LINKS */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaHome />
          Home
        </Link>

        <Link
          to="/players"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaUsers />
          Players
        </Link>

        <Link
          to="/analytics"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaChartBar />
          Analytics
        </Link>

        <Link
          to="/predictor"
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaRobot />
          Predictor
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;