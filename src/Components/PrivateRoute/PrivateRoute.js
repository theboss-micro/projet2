import React from 'react'
import {useSelector} from "react-redux"
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({component:Component,...defaultprops}) => {

   const isAuth = useSelector(state=>state.userReducer.isAuth)

   if(!isAuth) return <Navigate to="/login"/>
  return (
    <div>
        {/* <Route component={Component} {...defaultprops}/> */}
    </div>
  )
}

export default PrivateRoute