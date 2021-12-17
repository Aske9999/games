import React, {useState} from "react";
import {nanoid} from "nanoid";

const Stuff = () => {
    const toDoInitial = JSON.parse(localStorage.getItem("stuff")) || []
    const [value, setValue] = useState("")
    const [stuff, setStuff] = useState(toDoInitial)

    const inputChange = (e) => {
        setValue(e.target.value)
    }

    const addStuff = () => {
        const newStuff = {
            value,
            id: nanoid()
        }
        if (value.trim()) {
            setStuff([...stuff, newStuff])
            localStorage.setItem("stuff", JSON.stringify([...stuff, newStuff]))
        }
        setValue("")
    }

    return (
        <div className=".container">
            <input value={value} onChange={inputChange} type="text"/>
            <button onClick={addStuff} type="button">Add</button>
            <hr/>
            <ol>
                {
                    stuff.map(item => {
                        return <li key={item.id}>{item.value}</li>
                    })
                }
            </ol>
        </div>
    )
}
export default Stuff