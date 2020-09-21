import React from 'react'
import { RecoilRoot } from 'recoil'

import TodoPage from './pages/Todo'
import './styles.css'

function App () {
  return (
    <RecoilRoot>
      <TodoPage />
    </RecoilRoot>
  )
}

export default App
