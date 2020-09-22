import React, { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState, todoListState } from '../store/todoStore'
import Todo from './Todo'
import TodoFilters from './TodoFilters'

const TodoList = () => {
  const todoList = useRecoilValue(todoListState)
  const filteredTodoList = useRecoilValue(filteredTodoListState)

  const renderTodos = useCallback(id => <Todo key={id} id={id} />, [])

  return (
    <div className='todoList'>
      {todoList.length ? <TodoFilters /> : null}
      <ul className='listContainer'>{filteredTodoList.map(renderTodos)}</ul>
    </div>
  )
}

export default TodoList
