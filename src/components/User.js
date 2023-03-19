import React, { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'

export const User = () => {
    const {Authstate} = useContext(AuthContext)
  return (
    <div>User: {Authstate && Authstate.user}</div>
  )
}
