import React from "react"

const Hero = () => {
  return (
    <div
      style={{
        padding: "8rem 3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          minWidth: "70%",
        }}
      >
        <div>
          <h1
            style={{
              color: "#fff",
              fontSize: "2.5rem",
              marginBottom: "0.3rem",
            }}
          >
            We make <span style={{ color: "#00CC78" }}>sl</span>ack apps
          </h1>
          <h1 style={{ color: "#fff", fontSize: "2.5rem", marginTop: "0" }}>
            ... for your t<span style={{ color: "#00CC78" }}>eam</span>
          </h1>
        </div>
        <div style={{ color: "#fff", fontSize: "1.4rem", marginLeft: "2rem" }}>
          <p>
            Engineering teams use tools to make work efficient. <br />
            What about tools to make teams more efficient?
          </p>

          <p>
            We create apps that improve your teams productivy. <br />
            No webs, no downloads, all from the comfort of slack.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
