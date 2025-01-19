import React, { useState } from 'react'
import '../Style.css'

function Todo() {
    const [todo,setTodo] = useState([]);
    const [input,setInput]= useState('');

    const handleSubmit = (e) =>{
        if(input != '') {
        setTodo(
            (todo)=>(
                todo.concat({
                    text : input ,
                    id : Math.floor(Math.random()*10)
                })
            )
        )
        setInput('')
    }
    else{
        alert('Enter Something in the todo')
    }
    }

      const removeTodo=(id)=>{
        setTodo(todo=> todo.filter((t) => t.id != id));
    }

  return (
    <div className='container'>
        <h1>Enter Your Todo</h1>
        <input type="text" name='name' value={input} onChange={e=>setInput(e.target.value)}  placeholder='Enter Your Todo List' />
        <button type='submit' onClick={handleSubmit}>submit</button>

        <ul className='todo-list'>
            {
                todo.map(({text,id})=>(
                    <li className='todo' key={id}>{text}
                    <button className='done' onClick={()=>removeTodo(id)}>
                        done </button></li>
                ))
            }
        </ul>

    </div>
  )
}

export default Todo