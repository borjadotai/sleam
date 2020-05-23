import React from "react"

import FeedbackImage from "./images/feedback"

const Feedback = () => {
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "40%",
          paddingLeft: "6%",
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
          Hold that thought
        </h1>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Keep track of your feedback <br /> during the sprint
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Feedback can be recognition or <br /> something to improve
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Team members can only see and <br /> delete their own feedback until{" "}
          <br /> their sprint ends
        </h3>
      </div>
      <div style={{ width: "100%", height: "auto" }}>
        <FeedbackImage />
      </div>
    </div>
  )
}

export default Feedback
