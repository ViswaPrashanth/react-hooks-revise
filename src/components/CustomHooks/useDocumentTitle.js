import React, {useEffect} from 'react'

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `clicked ${count}`
    },[count])
}

export default useDocumentTitle