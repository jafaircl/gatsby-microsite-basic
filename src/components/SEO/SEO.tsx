import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'

interface SeoProps {
  title: string
  description: string
  image: string
}

export const SEO: FunctionComponent<SeoProps> = ({
  title,
  description,
  image,
}) => (
  <Helmet>
    <html lang="en" />
    <meta name="robots" content="noindex, nofollow" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
  </Helmet>
)
