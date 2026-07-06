import stadium from "../assets/images/stadium.jpg";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${stadium})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop:"50px",
        alignItems: "center",
      }}
      
    >
       <h1> 🏏CricketIQ </h1>
     <h3>  Cricket Intelligence Powered by Data</h3>
    </div>
  );
}

export default Hero;