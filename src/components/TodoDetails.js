import React, { useState, useCallback, useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { clickedTodoState, todoListState } from '../store/todoStore'

const TodoDetails = () => {
  const todo = useRecoilValue(clickedTodoState)
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (!todo) {
      return
    }
    setTitle(todo.title)
    setDescription(todo.description)
  }, [todo])

  const handleTitleChange = useCallback(({ target: { value } }) => {
    setTitle(value)
  }, [])

  const handleDescriptionChange = useCallback(({ target: { value } }) => {
    setDescription(value)
  }, [])

  const handleEditTodo = useCallback(() => {
    const index = todoList.findIndex(item => item.id === todo.id)
    const newTodo = { ...todoList[index], title, description }

    setTodoList(prevTodos => [
      ...prevTodos.slice(0, index),
      newTodo,
      ...prevTodos.slice(index + 1)
    ])
  }, [todo, todoList, title, description])

  if (!todo) {
    return null
  }

  return (
    <div className='editContainer'>
      <p className='inputWrapper'>
        <label>Title</label>
        <input
          className='input'
          type='text'
          value={title}
          placeholder='Title...'
          onChange={handleTitleChange}
        />
      </p>
      <p className='inputWrapper'>
        <label>Description</label>
        <textarea
          className='input'
          type='text'
          value={description}
          placeholder='Description...'
          onChange={handleDescriptionChange}
          rows='3'
        />
      </p>
      <button className='editButton' onClick={handleEditTodo}>
        Edit
      </button>
    </div>
  )
}

export default TodoDetails
