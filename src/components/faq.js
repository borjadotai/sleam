import React from "react"
import Tag from "./tag"

const FAQ = () => {
  return (
    <div
      style={{
        padding: "8rem 3rem 2rem 3rem",
        display: "flex",
        marginBottom: "2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "70%",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "2.5rem",
            marginBottom: "2rem",
          }}
        >
          Frequently Asked Questions
        </h1>
        <div style={{ marginBottom: "1rem" }}>
          <h1
            style={{
              color: "#00CC78",
              fontSize: "1.5rem",
              marginBottom: "0",
            }}
          >
            Can I use feedo in multiple teams at the same time?
          </h1>
          <div style={{ color: "#fff", fontSize: "1.5rem", marginTop: "0" }}>
            <p>
              Yes! Feedo help you with multiple teams at the same time. For
              feedo teams and channels are the same. If you want to track things
              for your frontend team, just invite feedo to join #frontend
              channel. You can invite feedo to as many channels as you want and
              once he is in the channel you can start a new sprint for that new
              team within the feedo app in slack.
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
            Can I delete feedback I already sent?
          </h1>
          <div style={{ color: "#fff", fontSize: "1.5rem", marginTop: "0" }}>
            <p>
              Although you cannot edit submitted feedback at the moment, you can
              delete your submitted feedback. Only the user who submitted the
              feedback can delete it though, to prevent other people from
              deleting your own or you from deleting others by mistake. It is
              important to remember that once the sprint ends and a new one
              starts, the sprints feedback will be frozen and you wont be able
              to add or delete any of it for that now passed sprint.
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
            Can everybody see the feedback I sent?
          </h1>
          <div style={{ color: "#fff", fontSize: "1.5rem", marginTop: "0" }}>
            <p>
              All feedback is private until the day of your retro meeting
              (either on its own when the day of the day of the retro arrives or
              when an admin starts the retro). Also, as previously mentioned,
              once the sprint ends, everyone in the team will be able to see all
              feedback and you will no longer be able to add or delete feedback.
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
            Something else not covered here?
          </h1>
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

export default FAQ
