import React from 'react'
import { useLocation } from 'react-router-dom'
import Centered from './Centered'
import Default from './Default'

const Layouts = ({ children }) => {
  let location = useLocation()
  let { pathname } = { ...location }

  if (
    [
      '/login'
    ].includes(pathname)
  ) {
    return <Centered>{children}</Centered>
  } else {
      return <Default>{children}</Default>
  }
}

export default Layouts