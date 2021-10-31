import {
  BusinessCenterOutlined,
  ChatOutlined,
  HomeSharp,
  NotificationsOutlined,
  SearchOutlined,
  SupervisorAccountOutlined,
} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import './Header.css'
import HeaderOption from './HeaderOption'
function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://media-exp1.licdn.com/dms/image/C4D0BAQGZKGGJ75S72g/company-logo_200_200/0/1629754938156?e=2159024400&v=beta&t=IBmR7Q39iR_z3FiY6IcQlprM2MrTQxERxe2S1B1GY_M'
          alt='Linkedin Logo'
        />
      </div>
      <div className='header__search'>
        <SearchOutlined />
        <input type='text' />
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeSharp} title='Home' />
        <HeaderOption Icon={SupervisorAccountOutlined} title='My Network' />
        <HeaderOption Icon={BusinessCenterOutlined} title='Jobs' />
        <HeaderOption Icon={ChatOutlined} title='Messaging' />
        <HeaderOption Icon={NotificationsOutlined} title='Notifications' />
        <HeaderOption
          avatar={`${user?.photoUrl} ?? "https://picsum.photos/300/300"`}
          title='me'
          onClick={logoutOfApp}
        />
      </div>
    </div>
  )
}

export default Header
