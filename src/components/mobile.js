import React from "react"

import MobileImageLeft from "./images/mobileLeft"
import MobileImageRight from "./images/mobileRight"

const Mobile = () => {
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
          Always. <br /> On.
        </h1>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          Since our app <br /> lives within slack.
        </h3>
        <h3
          style={{
            color: "#fff",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
          }}
        >
          You can also enjoy it <br /> n your mobile phone!
        </h3>
      </div>
      <div style={{ width: "20rem", height: "auto", marginRight: "2rem" }}>
        <MobileImageLeft />
      </div>
      <div style={{ width: "20rem", height: "auto" }}>
        <MobileImageRight />
      </div>
    </div>
  )
}

export default Mobile
