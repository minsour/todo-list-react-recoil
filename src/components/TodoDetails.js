import React, { useState, useCallback, useEffect } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'
import { clickedTodoState, todoState } from '../store/todoStore'

const TodoDetails = () => {
  const clickedTodoId = useRecoilValue(clickedTodoState)
  const [todo, setTodo] = useRecoilState(todoState(clickedTodoId))
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (!clickedTodoId) {
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
    setTodo(prevTodo => ({
      ...prevTodo,
      title,
      description
    }))
  }, [todo, title, description])

  if (!clickedTodoId) {
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
