import React, { useCallback } from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../store/todoStore'
import Todo from './Todo'
import TodoFilters from './TodoFilters'

const TodoList = () => {
  const todos = useRecoilValue(filteredTodoListState)

  const renderTodos = useCallback(
    todo => <Todo key={todo.id} todo={todo} />,
    []
  )

  return (
    <div className='todoList'>
      {todos.length ? <TodoFilters /> : null}
      <ul className='listContainer'>{todos.map(renderTodos)}</ul>
    </div>
  )
}

export default TodoList
