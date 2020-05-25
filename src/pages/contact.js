import React from "react"
import "../components/layout.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Footer from "../components/footer"

const ContactPage = () => (
  <>
    <SEO title="Sleam" />
    <Layout>
      <Contact />
      <Footer />
    </Layout>
  </>
)

export default ContactPage
