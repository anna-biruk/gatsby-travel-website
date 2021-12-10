import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Image/>
  </Layout>
)

export default IndexPage
