import React from "react"

import AccountableImage from "./images/accountable"

const Accountable = () => {
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
          Stay accountable
        </h1>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Keep track of the action items <br /> your team set out to do.
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Your next sprint will show them <br /> so you can tick them when done.
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Track what your team is setting out to do <br /> and what they
          actually accomplish.
        </h3>
      </div>
      <div style={{ width: "100%", height: "auto" }}>
        <AccountableImage />
      </div>
    </div>
  )
}

export default Accountable
