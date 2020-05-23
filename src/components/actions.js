import React from "react"

import ActionsImage from "./images/actions"

const Actions = () => {
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
        <ActionsImage />
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
          Convenient actions
        </h1>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          When the sprint ends <br /> all feedback is revealed.
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Feedback is anonymous. <br /> Nobody can see who sent it.
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          You can then go over the <br /> feedback and discuss the good
          <br /> and the not so good.
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          If something requires a team <br /> action, you can easily create a
          <br /> new action item.
        </h3>
      </div>
    </div>
  )
}

export default Actions
