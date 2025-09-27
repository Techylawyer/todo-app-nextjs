'use client'

import { Button } from '@/components/ui/button'
import { useRouter, useSearchParams } from 'next/navigation'

export default function FilterButtons() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const current = searchParams.get('filter') || 'all'

  const setFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('filter', filter)
    router.push(`?${params.toString()}`)
  }

  return (
    <section
      className="filter-section flex gap-2 justify-center"
      role="region"
      aria-label="Filter Todos"
    >
      <Button
        variant="default"
        size="default"
        onClick={() => setFilter('all')}
        disabled={current === 'all'}
        className="btn btn-active btn-primary cursor-pointer"
      >
        All
      </Button>
      <Button
        variant="default"
        size="default"
        className="btn btn-active btn-primary cursor-pointer"
        onClick={() => setFilter('active')}
        disabled={current === 'active'}
      >
        Active
      </Button>
      <Button
        variant="default"
        size="default"
        className="btn btn-active btn-primary cursor-pointer"
        onClick={() => setFilter('completed')}
        disabled={current === 'completed'}
      >
        Completed
      </Button>
    </section>
  )
}
