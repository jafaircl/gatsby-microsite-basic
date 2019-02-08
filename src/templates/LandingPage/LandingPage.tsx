import React, { FunctionComponent } from 'react'

import Layout from '../../components/Layout'

import styles from './LandingPage.module.scss'

interface LandingPageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: {
      id: string
      excerpt: string
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

export const LandingPage: FunctionComponent<LandingPageTemplateProps> = ({
  data: {
    markdownRemark: {
      frontmatter: { title },
    },
  },
  data: {
    markdownRemark: { html },
  },
}) => (
  <Layout>
    <article className={styles.mainContent}>
      <header className={styles.header}><h1>{title}</h1></header>
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  </Layout>
)
