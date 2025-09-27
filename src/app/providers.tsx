'use client'

import { QueryProvider } from './query-provider'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../components/ErrorFallback'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  
   const handleReset = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/todos'
    }
  }

  return (
    <QueryProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={handleReset}
      >
        {children}
      </ErrorBoundary>
    </QueryProvider>
  )
}
