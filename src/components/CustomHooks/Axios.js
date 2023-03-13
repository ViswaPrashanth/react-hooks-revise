import React from 'react'
import useAxios from './useAxios'

const Axios = () => {
    const [items] = useAxios()
  return (
    <div>
        {items.title}
    </div>
  )
}

export default Axios