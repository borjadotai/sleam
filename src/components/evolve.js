import React from "react"

import EvolveImage from "./images/evolve"

const Evolve = () => {
  return (
    <div
      style={{
        padding: "8rem 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", height: "auto" }}>
        <EvolveImage />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "40%",
          paddingRight: "6%",
        }}
      >
        <h1
          style={{
            color: "#00CC78",
            fontSize: "3rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Evolve over time
        </h1>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Track your teams feedback and <br /> action items by sprint.
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Compare action goals <br /> with actions completed.
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          All this data will help you track and <br /> improve your teams
          performance.
        </h3>
      </div>
    </div>
  )
}

export default Evolve
