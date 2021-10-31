import {
  CalendarViewDayOutlined,
  CreateOutlined,
  EventNoteOutlined,
  ImageOutlined,
  SubscriptionsOutlined,
} from '@mui/icons-material'
import { useEffect, useState } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import {
  onSnapshot,
  query,
  collection,
  addDoc,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore'
import FlipMove from 'react-flip-move'

import { db } from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function Feed() {
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')
  const user = useSelector(selectUser)

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (querySnapshot) => {
          setPosts(
            querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        }
      ),
    []
  )

  const sendPost = async (e) => {
    e.preventDefault()
    await addDoc(collection(db, 'posts'), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: serverTimestamp(),
    })
    setInput('')
  }
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateOutlined />
          <form>
            <input
              type='text'
              placeholder='Start a post'
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
              }}
            />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>

        <div className='feed__inputOptions'>
          <InputOption title='Photo' Icon={ImageOutlined} color='#70B5F9' />
          <InputOption
            title='Video'
            Icon={SubscriptionsOutlined}
            color='#E7A33E'
          />
          <InputOption
            title='Events'
            Icon={EventNoteOutlined}
            color='#C0CBCD'
          />
          <InputOption
            title='Write article'
            Icon={CalendarViewDayOutlined}
            color='#7FC15E'
          />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts.map(
          ({
            id,
            data: { name, description, message, photoUrl, timestamp },
          }) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              timestamp={timestamp}
            />
          )
        )}
      </FlipMove>
    </div>
  )
}

export default Feed
