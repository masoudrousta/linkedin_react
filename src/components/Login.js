import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@firebase/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth } from '../firebase'
import './Login.css'
function Login() {
  const [userInfo, setUserInfo] = useState({
    fullname: '',
    photoUrl: '',
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const register = () => {
    const { fullname, photoUrl, email, password } = userInfo
    if (!fullname || !email || !password) {
      alert('Fill in all the required fields!')
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        updateProfile(userCredential.user, {
          displayName: fullname,
          photoURL: photoUrl,
        })
          .then(() => {
            // Profile updated!
            // ...
            dispatch(login(userCredential.user))
          })
          .catch((error) => {
            // An error occurred
            // ...
            alert('An error occured updating profile!')
          })
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  const loginToApp = (e) => {
    e.preventDefault()
    const { email, password } = userInfo
    if (!email || !password) {
      alert('Email and Password are required!')
      return
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        dispatch(login(userCredential.user))
        // ...
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <div className='login'>
      <img
        src='https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png'
        alt='Linkedin Logo'
      />
      <form>
        <input
          type='text'
          placeholder='Full name (required if registering)'
          value={userInfo.fullname}
          onChange={(e) => {
            setUserInfo({ ...userInfo, fullname: e.target.value })
          }}
        />
        <input
          type='text'
          placeholder='Profile pic URL (optional)'
          value={userInfo.photoUrl}
          onChange={(e) => {
            setUserInfo({ ...userInfo, photoUrl: e.target.value })
          }}
        />
        <input
          type='email'
          placeholder='Email'
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo({ ...userInfo, email: e.target.value })
          }}
        />
        <input
          type='password'
          placeholder='Password'
          value={userInfo.password}
          onChange={(e) => {
            setUserInfo({ ...userInfo, password: e.target.value })
          }}
        />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{' '}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
