import React,{useContext} from 'react'

const Edit = ({inputText, setInputText,  todos,  setTodos}) => {

    const handleChange = (e) => {
        setInputText(e.target.value)
    }
    const updateHandler = (e) => {
        e.preventDefault()
        setTodos(inputText)
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
