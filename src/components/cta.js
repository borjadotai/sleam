import React from "react"

import Tag from "./tag"

const CTA = ({ title, subtitle, final, tag }) => {
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
        {title}
      </h1>
      <h1
        style={{
          color: "#fff",
          fontSize: "2.5rem",
          marginBottom: "0.3rem",
        }}
      >
        {subtitle}
      </h1>
      {final && (
        <h1
          style={{
            color: "#fff",
            fontSize: "2.5rem",
            marginBottom: "0.3rem",
          }}
        >
          {final} {""}
          <Tag size="2.5">{tag}</Tag>
        </h1>
      )}
    </div>
  )
}

export default CTA
