import React from "react"
import "../components/layout.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Skills from "../components/skills"
import Feedback from "../components/feedback"

const IndexPage = () => (
  <>
    <SEO title="Sleam" />
    <Layout>
      <Hero />
      <Intro />
      <Skills />
      <Feedback />
    </Layout>
  </>
)

export default IndexPage
