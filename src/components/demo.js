import React from "react"

const Demo = () => {
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
      <div style={{ width: "60%", height: "70vh" }}>
        <iframe
          title="demo"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YIWccgxz5KE"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default Demo
