'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../components/ErrorFallback'
import { useState, ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.href = '/todos'
        }}
      >
        {children}
      </ErrorBoundary>
    </QueryClientProvider>
  )
}
