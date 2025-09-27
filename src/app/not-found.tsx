// 'use client'

// // export const dynamic = 'force-dynamic'
// import NotFoundPage from 'components/NotFound'

// export default function NotFound() {
//   return <NotFoundPage />
// }


import Link from "next/link"

export default function NotFound() {
  return (
    <aside className="flex flex-col gap-5 text-center h-screen justify-center items-center">
      <h1 className="text-3xl font-semibold tracking-tight text-destructive">
        404 - Page Not Found
      </h1>
      <p className="text-destructive mb-10">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/todos"
        className="w-50 mx-auto inline-flex items-center justify-center px-4 py-2 bg-primary text-background rounded cursor-pointer"
      >
        ← Go back to Home
      </Link>
    </aside>
  )
}
