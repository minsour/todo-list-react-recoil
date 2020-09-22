import React, { useCallback } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { clickedTodoState, todoState } from '../store/todoStore'

const Todo = ({ id }) => {
  const [todo, setTodo] = useRecoilState(todoState(id))
  const setClickedTodo = useSetRecoilState(clickedTodoState)

  const handleToggleCompletion = useCallback(() => {
    setTodo(prevTodo => ({
      ...prevTodo,
      isCompleted: !prevTodo.isCompleted
    }))
  }, [])

  const handleClickTodo = useCallback(() => {
    setClickedTodo(id)
  }, [])

  return (
    <li className='todo'>
      <input
        className='todoCheckBox'
        type='checkbox'
        checked={todo.isCompleted}
        onChange={handleToggleCompletion}
      />
      <div className='todoTitle' onClick={handleClickTodo}>
        {todo.title}
      </div>
      <button className='todoRemoveButton'>X</button>
    </li>
  )
}

export default Todo
