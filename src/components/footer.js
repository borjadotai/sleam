import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000",
      marginTop: "8rem",
      padding: "2rem",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        minWidth: "70%",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "3rem" }}>
        <Link
          to="/"
          style={{
            color: "#00CC78",
            textDecoration: `none`,
          }}
        >
          Sleam
        </Link>
      </h1>
      <div
        style={{
          paddingLeft: "5rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <span style={{ color: "#fff", fontSize: "1.2rem" }}>Contact us</span>
        <span style={{ color: "#fff", fontSize: "1.2rem" }}>FAQ</span>
        <span style={{ color: "#fff", fontSize: "1.2rem" }}>Privacy</span>
        <span style={{ color: "#fff", fontSize: "1.2rem" }}>Terms</span>
      </div>
      <span style={{ color: "#fff", fontSize: "1.2rem", marginLeft: "3.5rem" }}>
        © Sleam 2020 | Made with{" "}
        <span role="img" aria-label="love">
          💖
        </span>{" "}
        in London
      </span>
    </div>
  </footer>
)

export default Footer
