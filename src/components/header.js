import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import AddButtonImage from "../components/images/addButton"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "3rem 3rem 0 3rem",
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
          {siteTitle}
        </Link>
      </h1>
      <div style={{ width: "12rem", height: "auto" }}>
        <a
          href="https://slack.com/oauth/v2/authorize?client_id=1023998233617.1076945034196&scope=channels:history,channels:read,chat:write,groups:history,groups:read,im:history,im:read,mpim:history,mpim:read"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AddButtonImage />
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
