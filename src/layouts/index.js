import React from 'react'
import { useLocation } from 'react-router-dom'
import Centered from './Centered'

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
      console.log('invalid path name for Layout')
  }
}

export default Layouts