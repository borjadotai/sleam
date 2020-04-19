import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="terms" />
    <h3>Terms and conditions</h3>
    <p>
      We are currently under development and all our apps are under an ongoing
      beta period. This means our app might not be on a production ready level
      and events such as loss of data, bugs found while using the app, etc may
      ocurr. If that is the case, you as the user, accept the we (referring to
      the people involved in the creation of Sleam's products, in particular
      Borja Leiva) are not responsable for any damage or issues this may cause
      you and we won't be held responsable for any potential issue.
    </p>
    <h3>Privacy notice</h3>
    <p>
      We only collect data relevant to the services that our apps provide and
      only data that you yourself as the user have provided to or through slack.
      We always try to keep the amount of permissions we require as low as we
      can. Similarly, we try to keep data as lean and anonymous as possible. The
      data entered into our app by a user will be sent into our server and
      database and will be stored there in order for the app to work. As the
      user you understand and accept that we are not responsable for the
      security or safety of such data. We will try our best to protect it but if
      anything was to happen to it, we will not be held reponsable for it.
    </p>
  </Layout>
)

export default SecondPage
