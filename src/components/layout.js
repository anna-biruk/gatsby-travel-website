import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
 

  return (
    <>
      <Navbar />

      <main>{children}</main>
      <Footer />
    </>
  )
}



export default Layout
