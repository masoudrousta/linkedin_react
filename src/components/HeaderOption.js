import { Avatar } from '@mui/material'
import './HeaderOption.css'
function HeaderOptions({ avatar, title, Icon, onClick }) {
  return (
    <div className='headerOption' onClick={onClick}>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && <Avatar className='headerOption__icon' src={avatar} />}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions
