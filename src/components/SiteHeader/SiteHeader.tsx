import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import { useObservable, useEventCallback } from 'rxjs-hooks'
import { animationFrameScheduler, fromEvent, of } from 'rxjs'
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  switchMap,
  throttleTime,
  tap,
} from 'rxjs/operators'

import SEO from '../SEO'
import Button from '../Button'

import styles from './SiteHeader.module.scss'

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        defaultImage
        defaultPhoneNumber
        headerLogo
      }
    }
  }
`

const watchScrollDirection = () =>
  of(typeof window !== 'undefined').pipe(
    filter(Boolean),
    switchMap(() => fromEvent(window, 'scroll', { passive: true })),
    throttleTime(0, animationFrameScheduler),
    map(() => window.pageYOffset),
    pairwise(),
    map(([y1, y2]) => (y2 < y1 ? 'UP' : 'DOWN')),
    distinctUntilChanged()
  )

export const SiteHeader = () => {
  const scrollDirection = useObservable(watchScrollDirection, 'UP')
  if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light')
  }
  const [themeChangeCallback, value] = useEventCallback(
    $event =>
      $event.pipe(
        tap(() =>
          localStorage.getItem('theme') === 'light'
            ? localStorage.setItem('theme', 'dark')
            : localStorage.setItem('theme', 'light')
        ),
        map(() => localStorage.getItem('theme')),
        tap(console.log)
      ),
    localStorage.getItem('theme')
  )

  return (
    <StaticQuery
      query={query}
      render={({ site: { siteMetadata: meta } }) => (
        <header
          className={`${styles.siteHeader} ${scrollDirection === 'DOWN' &&
            styles.hidden}`}
        >
          <img src={meta.headerLogo} alt="logo" />
          <span className={styles.siteHeaderSpacer} />
          <Button>
            <a href={`tel:${meta.defaultPhoneNumber.replace(/[^0-9]+/g, '')}`}>
              Call Now
            </a>
          </Button>
        </header>
      )}
    />
  )
}

// <Button className={value} onClick={themeChangeCallback}>x</Button>
