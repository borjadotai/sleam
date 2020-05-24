import React from "react"
import "../components/layout.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import CTA from "../components/cta"
import Skills from "../components/skills"
import Feedback from "../components/feedback"
import Actions from "../components/actions"
import Accountable from "../components/accountable"
import Evolve from "../components/evolve"
import Mobile from "../components/mobile"
import Demo from "../components/demo"
import AddButton from "../components/addButton"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="Sleam" />
    <Layout>
      <Hero />
      <CTA
        title="Introducing our first app"
        subtitle="reinventing retrospective meetings"
        final="with"
        tag="feedo"
      />
      <Skills />
      <Feedback />
      <Actions />
      <Accountable />
      <Evolve />
      <Mobile />
      <CTA title="Not convinced yet?" subtitle="See it in action" />
      <Demo />
      <CTA
        title="Convinced now?"
        subtitle="Do your team a favour"
        final="install"
        tag="feedo"
      />
      <AddButton />
      <Footer />
    </Layout>
  </>
)

export default IndexPage
