import React from 'react'
import Routing from '../Routing/Routes'
import { UserContext } from './Usercontext'

const AppContext = () => {
  return (
  <UserContext.Provider>
      <Routing />
  </UserContext.Provider>
  )
}

export default AppContext
