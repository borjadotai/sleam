import React from "react"
import "../components/layout.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Block from "../components/block"
import Footer from "../components/footer"

const Legal = () => (
  <>
    <SEO title="Sleam" />
    <Layout>
      <div
        style={{
          padding: "8rem 3rem 2rem 3rem",
        }}
      >
        <Block title="Terms and conditions">
          We are currently under development and all our apps are under an
          ongoing beta period. This means our app might not be on a production
          ready level and events such as loss of data, bugs found while using
          the app, etc may ocurr. If that is the case, you as the user, accept
          the we (referring to the people involved in the creation of Sleam's
          products, in particular Borja Leiva) are not responsable for any
          damage or issues this may cause you and we won't be held responsable
          for any potential issue. We are currently giving our products and
          services for free, all we ask for is that you understand and agree to
          use them under your own risk.
        </Block>
        <Block title="Privacy policy">
          We only collect data relevant to the services that our apps provide
          and only data that you yourself as the user have provided to or
          through slack. We always try to keep the amount of permissions we
          require as low as we can. Similarly, we try to keep data as lean and
          anonymous as possible. The data entered into our app by a user will be
          sent into our server and database and will be stored there in order
          for the app to work. Most of this data will be the content of users
          feedback, action items, sprint dates, etc, rather than personal
          information. As the user you understand and accept that we are not
          responsable for the security or safety of such data. We will try our
          best to handle and protect it but if anything was to happen to it, we
          will not be held reponsable for it. Sleam is currently a free to use
          side project and so we wanna give everyone the chance to use our
          products and benefit from them but not to be held responsable if
          something went wrong.
        </Block>
      </div>
      <Footer />
    </Layout>
  </>
)

export default Legal
