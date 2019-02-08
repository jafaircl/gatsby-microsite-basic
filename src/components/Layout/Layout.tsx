import React, { FunctionComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SEO from '../SEO'
import SiteHeader from '../SiteHeader'
import SiteFooter from '../SiteFooter'

import './Layout.scss'

interface LayoutProps {
  children: JSX.Element[] | JSX.Element
}

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        defaultImage
      }
    }
  }
`

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site: { siteMetadata: meta } }) => (
      <>
        <SEO
          title={meta.title}
          description={meta.description}
          image={meta.defaultImage}
        />
        <article>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </article>
      </>
    )}
  />
)
