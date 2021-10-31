import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from '@mui/icons-material'
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import './Post.css'
import { forwardRef } from 'react'
const Post = forwardRef(
  ({ name, description, message, photoUrl, timestamp }, ref) => {
    return (
      <div ref={ref} className='post'>
        <div className='post__header'>
          <Avatar src={photoUrl}>{name[0]?.toUpperCase()}</Avatar>
          <div className='post__info'>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{new Date(timestamp?.seconds * 1000).toLocaleString()}</p>
          </div>
        </div>
        <div className='post__body'>
          <p>{message}</p>
        </div>

        <div className='post__buttons'>
          <InputOption title='Like' Icon={ThumbUpAltOutlined} color='gray' />
          <InputOption title='Comment' Icon={ChatOutlined} color='gray' />
          <InputOption title='Share' Icon={ShareOutlined} color='gray' />
          <InputOption title='Send' Icon={SendOutlined} color='gray' />
        </div>
      </div>
    )
  }
)

export default Post
