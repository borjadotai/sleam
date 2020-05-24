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
        <AddButtonImage />
      </div>
    </div>
  )
}

export default AddButton
