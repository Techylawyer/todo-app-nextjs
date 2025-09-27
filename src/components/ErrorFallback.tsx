'use client'

import { Button } from '@/components/ui/button'
import type { FallbackProps } from 'react-error-boundary'


export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const handleReset = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/todos'
    }
    resetErrorBoundary()
  }

  return (
    <aside
      role="alert"
      className="flex flex-col p-10 text-center h-screen bg-secondary"
    >
      <h2 className="text-destructive text-2xl font-bold">
        There was a problem loading this page:
      </h2>
      <pre className="whitespace-pre-wrap m-10 text-xl">{error.message}</pre>
      <Button
        variant="default"
        size="default"
        className="w-50 mx-auto cursor-pointer"
        onClick={handleReset}
      >
        Go to Home Page
      </Button>
    </aside>
  )
}
