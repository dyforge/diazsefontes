import React, { useState, useMemo, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeScreen from '../homeScreen'
import { LoginScreen } from '../loginScreen'
import { NoMatch } from '../NoMatch'
import { ChangePassword } from '../ChangePassword'
import { Register } from '../Register'
import { ForgotPassword } from '../ForgotPassword'
import { DashBoard } from '../DashBoard'
import { Contactus } from '../Contactus'
import Aboutus from '../Aboutus'
import { Blog } from '../Blog'
import { UserContext } from '../AppContext/Usercontext.js'
import { OpenFamilyTree } from '../openFamilyTree'
import { EditLand } from '../editLand'
import { AddLandDetails } from '../addLandDetails'
import { EditProject } from '../editProject'
import { AddProjectDetails } from '../addProjectDetails'
import { EditTrial } from '../editTrial'
import { AddTrialDetails } from '../addTrialDetails'
import { EditChild } from '../editChild'
import { AddChildDetails } from '../addChildDetails'

const Routing = () => {
  const userDat = useContext(UserContext)
  const [value, setValue] = useState(null)
  
  const providerValue = useMemo(() => ({ 
    value, setValue 
  }), [value, setValue])
  return (
    <div className='app'>
      <BrowserRouter>
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route index exact path='/' element={
                <HomeScreen />
            }></Route>

          <Route exact path='/loginscreen' element={
                <LoginScreen />
            }></Route>

          <Route exact path='/dashboard' element={
                <DashBoard />
            }/>
          <Route exact path='/dashboard/land/edit' element={
                <EditLand />
            }/>

          <Route exact path='/dashboard/land/addLandDetails' element={
                <AddLandDetails />
            }/>

          <Route exact path='/dashboard/project/edit' element={
                <EditProject />
            }/>

          <Route exact path='/dashboard/project/addProjectDetails' element={
                <AddProjectDetails />
            }/>

          <Route exact path='/dashboard/trial/edit' element={
                <EditTrial />
            }/>

          <Route exact path='/dashboard/trial/addTrialDetails' element={
                <AddTrialDetails />
            }/> 

          <Route exact path='/dashboard/child/edit' element={
                <EditChild />
            }/>

          <Route exact path='/dashboard/child/addChildDetails' element={
                <AddChildDetails />
            }/> 
          <Route exact path='/OpenFamilyTree' element={
                <OpenFamilyTree />
              } />

          <Route exact path='/changepassword' element={
                <ChangePassword />
              } />

          <Route exact path='/register' element={
                <Register />
           } />

          <Route exact path='/forgotpassword' element={
                <ForgotPassword />
              } />

          <Route exact path='/contactus' element={
                <Contactus />
              } />

          <Route exact path='/aboutus' element={
                <Aboutus />
              } />

          <Route exact path='/blog' element={
                <Blog />
              } />

          <Route exact path='*' element={
                <NoMatch />
              }></Route>

        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default Routing
