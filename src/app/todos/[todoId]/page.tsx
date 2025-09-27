'use client'

import TodoItemDetail from "components/TodoItemDetail"
import React from "react"

export default function TodoItemPage({
  params,
}: {
  params: Promise<{ todoId: string }>
}) {
  const unwrappedParams = React.use(params)
  const todoId = unwrappedParams.todoId

  return <TodoItemDetail todoId={todoId} />
}