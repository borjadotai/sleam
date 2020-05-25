import React from "react"

import Tag from "./tag"
import SkillsImage from "./images/skills"

const Skills = () => {
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
        <SkillsImage />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "40%",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "2rem",
            marginBottom: "0.3rem",
          }}
        >
          Submit <span style={{ color: "#00CC78" }}>feedback</span>
        </h1>
        <h1
          style={{
            marginTop: "0rem",
          }}
        >
          <Tag size="2">during sprints</Tag>
        </h1>

        <h1
          style={{
            color: "#00CC78",
            fontSize: "2rem",
            marginBottom: "0.3rem",
          }}
        >
          Start <span style={{ color: "#fff" }}>retros</span> with an
        </h1>
        <h1
          style={{
            color: "#00CC78",
            fontSize: "2rem",
            marginTop: "0rem",
          }}
        >
          existing agenda
        </h1>

        <h1
          style={{
            color: "#00CC78",
            fontSize: "2rem",
            marginBottom: "0.3rem",
          }}
        >
          Set actions <span style={{ color: "#fff" }}>you can look</span>
        </h1>
        <h1
          style={{
            color: "#fff",
            fontSize: "2rem",
            marginTop: "0rem",
          }}
        >
          back to & <Tag size="2">track progress</Tag>
        </h1>

        <h1
          style={{
            color: "#00CC78",
            fontSize: "2rem",
            marginBottom: "0.3rem",
          }}
        >
          <span style={{ color: "#fff" }}>Keep</span> track{" "}
          <span style={{ color: "#fff" }}>of</span> every sprint
        </h1>
        <h1
          style={{
            color: "#00CC78",
            fontSize: "2rem",
            marginTop: "0rem",
          }}
        >
          <span style={{ color: "#fff" }}>in</span> one single place
        </h1>
      </div>
    </div>
  )
}

export default Skills
