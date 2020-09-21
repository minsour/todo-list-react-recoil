import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { todoFilterState } from '../store/todoStore'
import { FILTER_STATE } from '../constants/state'

const TodoFilters = () => {
  const [filterState, setFilterState] = useRecoilState(todoFilterState)
  const states = Object.keys(FILTER_STATE)

  const handleFilterChange = useCallback(
    ({ target: { value } }) => {
      setFilterState(value)
    },
    [setFilterState]
  )

  return (
    <select value={filterState} onChange={handleFilterChange}>
      {states.map(state => (
        <option key={state} value={FILTER_STATE[state]}>
          {FILTER_STATE[state]}
        </option>
      ))}
    </select>
  )
}

export default TodoFilters
