import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../store/todoStore'

const Todo = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex(item => item === todo)

  const handleToggleCompletion = useCallback(() => {
    const newTodo = {
      ...todo,
      isCompleted: !todo.isCompleted
    }

    setTodoList(prevTodos => [
      ...prevTodos.slice(0, index),
      newTodo,
      ...prevTodos.slice(index + 1)
    ])
  })

  const handleRemoveTodo = useCallback(() => {
    setTodoList(prevTodos => [
      ...prevTodos.slice(0, index),
      ...prevTodos.slice(index + 1)
    ])
  })

  return (
    <li className='todo'>
      <input
        className='todoCheckBox'
        type='checkbox'
        checked={todo.isCompleted}
        onChange={handleToggleCompletion}
      />
      <div className='todoTitle'>{todo.title}</div>
      <button className='todoRemoveButton' onClick={handleRemoveTodo}>
        X
      </button>
    </li>
  )
}

export default Todo
