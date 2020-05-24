import React from "react"

import AddButtonImage from "../components/images/addButton"

const AddButton = () => {
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
      <div style={{ width: "18rem", height: "auto" }}>
        <a
          href="https://slack.com/oauth/v2/authorize?client_id=1023998233617.1076945034196&scope=channels:history,channels:read,chat:write,groups:history,groups:read,im:history,im:read,mpim:history,mpim:read"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AddButtonImage />
        </a>
      </div>
    </div>
  )
}

export default AddButton
