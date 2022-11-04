import React from 'react'
import UserLandDetails from './UserLandDetails'
import UserProjectDetails from './UserProjectDetails'
import UserTrialDetails from './UserTrialDetails'
import UserChildDetails from './UserChildDetails'

const UserDataAdmin = ({ userDat }) => {
  // debugger
  return (
    <div>
      <UserLandDetails userDat={userDat} />
      <UserProjectDetails userDat={userDat} />
      <UserTrialDetails userDat={userDat} />
      <UserChildDetails userDat={userDat} />
    </div>
  )
}

export default UserDataAdmin
