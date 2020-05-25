import React from "react"

const Hero = ({ title, children }) => {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "70%",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "2.5rem",
            marginBottom: "0",
          }}
        >
          {title}
        </h1>
        <div style={{ color: "#fff", fontSize: "1.5rem", marginTop: "0" }}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
