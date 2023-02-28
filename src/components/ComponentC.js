import React, {useContext} from 'react'
import { userContext, channelContext } from '../App'

const ComponentC = () => {
    const user = useContext(userContext)
    const channel = useContext(channelContext)
  return (
    <div>
        {user} - {channel}
    </div>
  )
}

export default ComponentC