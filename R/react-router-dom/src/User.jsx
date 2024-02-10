import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
   const {id} = useParams();
  return (
    <div>
      this is id recieved in url params:  {id}
    </div>
  )
}

export default User
