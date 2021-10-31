import { onAuthStateChanged } from '@firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import Feed from './components/Feed'
import Header from './components/Header'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Widgets from './components/Widgets'
import { login, logout, selectUser } from './features/userSlice'
import { auth } from './firebase'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className='app'>
      {/* Header */}
      {/* App Body */}
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className='app__body'>
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
