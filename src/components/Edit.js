import React from 'react'

const Edit = ({setInputText, todos, todo, inputText, setTodos}) => {
    const handleChange = (e) => {
        setInputText(e.target.value)
    }
    const updateHandler = (e) => {
        e.preventDefault()
        setTodos()
    }

    return (
        <div>
         <form>
             <input type="text" onChange={handleChange}/>
             <button onClick={updateHandler}></button>
         </form>
        </div>
    )
}

export default Edit
