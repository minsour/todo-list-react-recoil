import React from 'react'

import TodoInput from '../components/TodoInput'
import TodoDetails from '../components/TodoDetails'
import TodoList from '../components/TodoList'

const TodoPage = () => (
  <div className='layout'>
    <div>
      <TodoInput />
      <TodoDetails />
    </div>
    <div>
      <TodoList />
    </div>
  </div>
)

export default TodoPage
