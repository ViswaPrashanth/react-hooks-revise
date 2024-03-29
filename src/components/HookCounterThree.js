import React, {useState} from 'react'

const HookCounterThree = () => {
    const [items, setItems] = useState([])
    const addItem = () => {
        setItems([...items, {
            id : items.length,
            value : Math.floor((Math.random() * 10) + 1)
        }])
    }
  return (
    <>
    <button type="button" onClick={addItem}>Add Item</button>
    <ul>
        {items.map(item => <li key={item.id}>{item.value}</li>)}
    </ul>
    </>
  )
}

export default HookCounterThree