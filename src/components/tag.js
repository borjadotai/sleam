import React from "react"

const Tag = ({ children, size }) => {
  return (
    <span
      style={{
        backgroundColor: "#00CC78",
        color: "#fff",
        fontSize: `${size}rem`,
        borderRadius: "50px",
        padding: "0.2rem 0.8rem",
      }}
    >
      {children}
    </span>
  )
}

export default Tag
