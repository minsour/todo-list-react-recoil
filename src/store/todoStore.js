import { atom, selector } from 'recoil'
import { FILTER_STATE } from '../constants/state'

export const todoListState = atom({
  key: 'todoList',
  default: []
})

export const clickedTodoState = atom({
  key: 'clickedTodo',
  default: null
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
      return todoList.filter(item => item.isCompleted)
    } else if (filterState === FILTER_STATE.UNCOMPLETED) {
      return todoList.filter(item => !item.isCompleted)
    }

    return todoList
  }
})
