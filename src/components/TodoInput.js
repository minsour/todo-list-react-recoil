import React, { useState, useCallback } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { todoListState, todoState } from '../store/todoStore'

const TodoInput = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const setTodo = useSetRecoilState(
    todoState(todoList.length ? todoList[todoList.length - 1] + 1 : 1)
  )

  const handleTitleChange = useCallback(({ target: { value } }) => {
    setTitle(value)
  }, [])

  const handleDescriptionChange = useCallback(({ target: { value } }) => {
    setDescription(value)
  }, [])

  const handleAdd = () => {
    setTodo(prevTodo => ({
      ...prevTodo,
      title,
      description
    }))
    setTodoList(prevTodos => [
      ...prevTodos,
      prevTodos.length ? prevTodos[prevTodos.length - 1] + 1 : 1
    ])

    setTitle('')
    setDescription('')
  }

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
