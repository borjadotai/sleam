import React from "react"

import Tag from "./tag"

const Intro = () => {
  return (
    <div
      style={{
        padding: "8rem 3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "#00CC78",
          fontSize: "2.5rem",
          marginBottom: "0.3rem",
        }}
      >
        Introducing our first app
      </h1>
      <h1
        style={{
          color: "#fff",
          fontSize: "2.5rem",
          marginBottom: "0.3rem",
        }}
      >
        reinventing retrospective meetings
      </h1>
      <h1
        style={{
          color: "#fff",
          fontSize: "2.5rem",
          marginBottom: "0.3rem",
        }}
      >
        with <Tag size="2.5">feedo</Tag>
      </h1>
    </div>
  )
}

export default Intro
