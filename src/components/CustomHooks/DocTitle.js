import React, {useState} from 'react'
import useDocumentTitle from './useDocumentTitle'

const DocTitle = () => {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
  return (
    <div>
        {count} <br/> <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default DocTitle