/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Welcome from "./welcome"
import Service from "./service"
import Project from "./project"
import Testimonial from "./testimonial"
import Team from "./team"
import Footer from "./footer"
// import "./layout.css"

import "bootstrap/dist/css/bootstrap.css"

import "../scss/app.scss"
import "../scss/icon/fontawesome-pro/css/all.min.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <Welcome />

        <Service />

        <Project />

        <Testimonial />
        
        <Team />

        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
