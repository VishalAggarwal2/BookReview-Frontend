import React from 'react'
import { UserAvatar } from '../UserAvatar/UserAvatar'

const Comments = ({message,user}:any) => { 
  return (
    <div className='flex flex-col border-r-4 p-3' style={{border:"solid black",borderRadius:"10px"}}>
        <div>
        <UserAvatar user={user}></UserAvatar>

        </div>
      <div>
        <p>
          {
          message
          }
        </p>
      </div>
    </div>
  )
}

export default Comments
