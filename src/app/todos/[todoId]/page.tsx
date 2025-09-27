'use client'

import TodoItemDetail from "components/TodoItemDetail"

export default function TodoDetail({ params }: { params: { todoId: string } }) {
  return <TodoItemDetail todoId={params.todoId} />
}