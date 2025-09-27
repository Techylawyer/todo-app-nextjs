'use client'

import { Suspense } from 'react'
import TodoPage from 'components/TodoPage'

export default function Todos() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <TodoPage />
    </Suspense>
  )
}
