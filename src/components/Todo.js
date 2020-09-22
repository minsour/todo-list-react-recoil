import React, { useCallback } from 'react'
import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil'
import { todoListState, clickedTodoState, todoState } from '../store/todoStore'

const Todo = ({ id }) => {
  const [todo, setTodo] = useRecoilState(todoState(id))
  const setTodoList = useSetRecoilState(todoListState)
  const setClickedTodo = useSetRecoilState(clickedTodoState)
  const resetTodo = useResetRecoilState(todoState(id))

  const handleToggleCompletion = useCallback(() => {
    setTodo(prevTodo => ({
      ...prevTodo,
      isCompleted: !prevTodo.isCompleted
    }))
  }, [])

  const handleClickTodo = useCallback(() => {
    setClickedTodo(id)
  }, [])

  const handleRemoveTodo = useCallback(() => {
    setTodoList(prevTodos => [
      ...prevTodos.slice(0, id - 1),
      ...prevTodos.slice(id)
    ])
    resetTodo()
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
      <button className='todoRemoveButton' onClick={handleRemoveTodo}>
        X
      </button>
    </li>
  )
}

export default Todo
