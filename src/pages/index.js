import React from "react"
import "../components/layout.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Skills from "../components/skills"
import Feedback from "../components/feedback"
import Actions from "../components/actions"
import Accountable from "../components/accountable"
import Evolve from "../components/evolve"

const IndexPage = () => (
  <>
    <SEO title="Sleam" />
    <Layout>
      <Hero />
      <Intro />
      <Skills />
      <Feedback />
      <Actions />
      <Accountable />
      <Evolve />
    </Layout>
  </>
)

export default IndexPage
