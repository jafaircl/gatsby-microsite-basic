import React, { FunctionComponent, useState } from 'react'

import { Dialog } from '@reach/dialog'
import '@reach/dialog/styles.css'

import Button from '../Button'

import styles from './SiteFooter.module.scss'

export const SiteFooter: FunctionComponent<any> = () => {
  const [state, setState] = useState({ showDialog: false })
  return (
    <>
      <footer className={styles.siteFooter}>
        <Button onClick={() => setState({ showDialog: true })}>
          Request an Appointment
        </Button>
      </footer>
      <Dialog
        isOpen={state.showDialog}
        onDismiss={() => setState({ showDialog: false })}
      >
        Hey buddy
      </Dialog>
    </>
  )
}

/*
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  query SiteFooterQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const SiteFooter = () => (
  <StaticQuery
    query={query}
    render={data => <footer>{JSON.stringify(data)}</footer>}
  />
)
*/
