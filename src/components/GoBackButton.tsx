'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { FaArrowLeft } from 'react-icons/fa'

export default function GoBackButton() {
  const router = useRouter()

  return (
    <Button
      variant="default"
      size="default"
      className="w-50 mx-auto cursor-pointer flex items-center justify-center gap-2"
      onClick={() => router.push('/todos')}
    >
      <FaArrowLeft /> Go back to Home
    </Button>
  )
}
