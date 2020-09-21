import React, { useState, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

import { todoListState } from '../store/todoStore'

let id = 0
function getId () {
  return id++
}

const TodoInput = () => {
  const setTodoList = useSetRecoilState(todoListState)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitleChange = useCallback(({ target: { value } }) => {
    setTitle(value)
  }, [])

  const handleDescriptionChange = useCallback(({ target: { value } }) => {
    setDescription(value)
  }, [])

  const handleAdd = useCallback(() => {
    setTodoList(prevTodos => [
      ...prevTodos,
      {
        id: getId(),
        title,
        description,
        isCompleted: false
      }
    ])

    setTitle('')
    setDescription('')
  }, [setTodoList, title, description])

  return (
    <div className='inputContainer'>
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
      <button className='addButton' onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}

export default TodoInput
