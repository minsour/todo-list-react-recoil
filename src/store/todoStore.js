import { atom, atomFamily, selector } from 'recoil'
import { FILTER_STATE } from '../constants/state'

const getTodo = id => ({
  id,
  title: '',
  description: '',
  isCompleted: false
})

export const todoState = atomFamily({
  key: 'todoState',
  default: id => getTodo(id)
})

export const clickedTodoState = atom({
  key: 'clickedTodoState',
  default: null
})

export const todoListState = atom({
  key: 'todoListState',
  default: []
})

export const todoFilterState = atom({
  key: 'todoFilterState',
  default: FILTER_STATE.SHOW_ALL
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const todoList = get(todoListState)
    const filterState = get(todoFilterState)

    if (filterState === FILTER_STATE.COMPLETED) {
      return todoList.filter(id => {
        const todo = get(todoState(id))
        return todo.isCompleted
      })
    } else if (filterState === FILTER_STATE.UNCOMPLETED) {
      return todoList.filter(id => {
        const todo = get(todoState(id))
        return !todo.isCompleted
      })
    }

    return todoList
  }
})
