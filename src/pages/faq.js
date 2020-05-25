import React from "react"
import "../components/layout.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FAQ from "../components/faq"
import Footer from "../components/footer"

const faq = () => (
  <>
    <SEO title="Sleam" />
    <Layout>
      <FAQ />
      <Footer />
    </Layout>
  </>
)

export default faq
