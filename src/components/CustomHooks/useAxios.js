import {useState, useEffect} from 'react'
import axios from 'axios'

const useAxios = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => setItems(res.data))
            .catch((err) => { console.log(err)})
    },[])
    return [items]
}

export default useAxios