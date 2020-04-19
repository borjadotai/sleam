import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>
      Hi there{" "}
      <span role="img" aria-label="wave">
        👋
      </span>
    </h3>
    <p>Are you ready to try Sleam's very first app?</p>
    <p>
      Let's do it! If you wan't to add <b>feedo</b>, the app that reinvents
      retros, just click the button{" "}
      <span role="img" aria-label="down">
        👇
      </span>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <a href="https://slack.com/oauth/v2/authorize?client_id=1023998233617.1076945034196&scope=channels:history,channels:read,chat:write,groups:history,groups:read,im:history,im:read,mpim:history,mpim:read">
        <img
          alt="Add to Slack"
          height="40"
          width="139"
          src="https://platform.slack-edge.com/img/add_to_slack.png"
          srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
        />
      </a>
    </div>
  </Layout>
)

export default IndexPage
