import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Button from '../Button'

import styles from './SiteHeader.module.scss'

const query = graphql`
  query AmpSiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        defaultImage
        headerLogo
      }
    }
  }
`

export const SiteHeader = () => (
    <StaticQuery
      query={query}
      render={({ site: { siteMetadata: meta } }) => (
        <header
          className={styles.siteHeader}
        >
          <img src={meta.headerLogo} alt="logo" />
          <span className={styles.siteHeaderSpacer} />
          <Button><a href={`tel:${meta.defaultPhoneNumber.replace(/[^0-9]+/g, '')}`}>Call Now</a></Button>
        </header>
      )}
    />
)
