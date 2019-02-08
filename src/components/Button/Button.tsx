import React, { FunctionComponent, Children, cloneElement } from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  children: string | number | JSX.Element[] | JSX.Element
  type?: 'solid-primary' | 'solid-accent' | 'ghost-primary' | 'ghost-accent'
  [key: string]: any
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  type = 'solid-primary',
  ...props
}) => {
  let style
  switch (type) {
    case 'solid-accent':
      style = styles.solidAccent
      break
    case 'ghost-primary':
      style = styles.ghostPrimary
      break
    case 'ghost-accent':
      style = styles.ghostAccent
      break
    default:
      style = styles.solidPrimary
  }
  
  if ((children as JSX.Element).type && (children as JSX.Element).type === 'a') {
    return cloneElement(children as JSX.Element, { className: style, ...props })
  } else {
    return (
        <button className={`${style} ${props.className}`} {...props}>
          {children}
        </button>
      )
  }
  
}
