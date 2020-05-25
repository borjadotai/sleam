import React from "react"
import Tag from "./tag"

const Contact = () => {
  return (
    <div
      style={{
        padding: "4rem 3rem 0.5rem 3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "70%",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "2.5rem",
            marginBottom: "2rem",
          }}
        >
          Contact us
        </h1>
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ color: "#fff", fontSize: "1.5rem", marginTop: "0" }}>
            <p>
              Do you want to tell us how much you like our products? <br />
              Is there any question you want to ask us? <br />
              Have you had any problem with them? <br />
              Do you have any suggestion?
            </p>
          </div>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <h1
            style={{
              color: "#00CC78",
              fontSize: "1.5rem",
              marginBottom: "0",
            }}
          >
            For all this and much more...
          </h1>
          Conact
          <div style={{ color: "#fff", fontSize: "1.5rem", marginTop: "0" }}>
            <p>
              You can always reach to me on{" "}
              <a
                href="https://twitter.com/borjadotai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                }}
              >
                <Tag>twitter</Tag>
              </a>{" "}
              or via{" "}
              <a
                href="https://t.me/borjadotai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                }}
              >
                <Tag>telegram</Tag>
              </a>{" "}
              or{" "}
              <a
                href="mailto:hi@borja.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontWeight: "500",
                  fontSize: "1.5rem",
                }}
              >
                <Tag>email</Tag>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
